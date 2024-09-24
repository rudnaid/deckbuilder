function createPipeline(query, startIndex, limit) {
  let pipeline =
	[
    { $match: query },
    { $skip: startIndex },
    { $limit: limit },
    { $sort: { manaCost : 1} },
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
