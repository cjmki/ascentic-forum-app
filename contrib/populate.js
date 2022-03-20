export default async (model, data, pcb) => {
  console.log(` [-] creating ${model.name} `);

  await model.sync({ force: true });
  for (let i = 0; i < data.length; i++) {
    console.log(`  | ${pcb(data[i])}`);
    await model.create(data[i]);
  }
};
