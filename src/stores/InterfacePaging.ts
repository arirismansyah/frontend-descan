
export interface Paging{
    current_page: number,
	data: string,
	kode_kab: string,
	kode_kec: string,
	kode_desa: string,
	no_kk: string,
	nik: string,
	nama_kepala: string,
    bantuan_id: number,
    waktu_bantuan: string,
	jumlah_bantuan: string,
	satuan_bantuan: string,
	encId: string
}

interface LaravelLink{
    url: string,
    label: number,
    active: boolean
}