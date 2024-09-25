function createPipeline(query, startIndex, limit) {
  console.log(query)
  let pipeline =
	[
    { $match: query },
    {
      $group: {
        _id: "$name", // Group by the 'name' field
        docWithLargestId: { $max: "$id" }, // Get the largest 'id'
        document: { $first: "$$ROOT" } // Keep the whole document with the largest id
      }
    },
    {
      $replaceRoot: { newRoot: "$document" } // Replace the root to return the full document
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
