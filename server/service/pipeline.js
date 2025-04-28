function createPipeline(query, startIndex, limit) {
  let pipeline =
	[
    { $match: query },
    {
      $group: {
        _id: "$name",
        docWithLargestId: { $max: "$id" },
        document: { $first: "$$ROOT" }
      }
    },
    {
      $replaceRoot: { newRoot: "$document" }
    },
    { $sort: { manaCost : 1} },
    { $skip: startIndex },
    { $limit: limit },

		{
      $lookup: {
        from: 'meta',
				let: { rarity_id: '$rarityId', },
				pipeline: [ 
          {
            $unwind: '$rarities',
					},
					{
            $match: { $expr: { $eq: ['$rarities.id', '$$rarity_id'], },
          },
        },
        {
          $project: {
            _id: 0,
            rarityData: '$rarities',
          },
        },
      ],
      as: 'rarityData',
    },
  },
  {
    $unwind: '$rarityData',
  },
	];
  return pipeline;
}

export default createPipeline;
