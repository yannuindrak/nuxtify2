import knex from "../../database"; // koneksi db
export default defineEventHandler(async (event) => {
  //GET All Data
  try {
    const role = await knex("m_ruang")
      .select("kdunit", "nama")
      .where("st_aktif", 1)
      .andWhere("kdunit", ">", 0);
    return role; // Return data products
  } catch (error) {
    console.error("Error fetching data user:", error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
