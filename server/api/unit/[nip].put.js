import knex from "../../database"; // koneksi db

//BERHASIL
export default defineEventHandler(async (event) => {
  //const nip = getRouterParams(event, 'nip');
  const params = await getRouterParams(event);
  //return params

  const nip = params.nip;

  //return nip

  const body = await readBody(event);

  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif,
  };

  //return data

  //Query UPDATE dengan Knex
  try {
    const [user] = await knex("m_login").where("nip", nip).update(data, "*");
    return {
      statusCode: 200,
      body: user,
      message: "Data user berhasil diperbarui",
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
});
