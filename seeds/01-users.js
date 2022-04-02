
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Adan', website: 'arodriguez133@icloud.com' },
        { name: 'Edgar', website: 'bigmedia.com' }
      ]);
    });
};
