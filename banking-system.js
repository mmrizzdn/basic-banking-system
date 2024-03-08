// MUHAMMAD AMMAR IZZUDIN

// Meminta input jumlah uang ketika klik tombol "Deposit" berdasarkan id elemen
document.getElementById('deposit').addEventListener('click', () => {
	let jumlah = parseFloat(
		window.prompt(
			'===>>> DEPOSIT <<<===\nMasukin jumlah uang yang mau kamu deposit: '
		)
	);

	alert('Tunggu sebentar yaaa, permintaan kamu lagi diproses, nih...');

	// Manggil method deposit yang berada di dalam class rekeningBank
	rekAmmar
		.deposit(jumlah)
		.then((resolve) => {
			alert(resolve);
		})
		.catch((reject) => {
			alert(reject);
		});
});

// Meminta input jumlah uang ketika klik tombol "Withdraw" berdasarkan id elemen
document.getElementById('withdraw').addEventListener('click', () => {
	let jumlah = parseFloat(
		window.prompt(
			'===>>> WITHDRAW <<<===\nMasukin jumlah uang yang mau kamu withdraw: '
		)
	);

	alert('Tunggu sebentar yaaa, permintaan kamu lagi diproses, nih...');

	// Manggil method withdraw yang berada di dalam class rekeningBank
	rekAmmar
		.withdraw(jumlah)
		.then((resolve) => {
			alert(resolve);
		})
		.catch((reject) => {
			alert(reject);
		});
});

// Nampilin saldo saat ini ketika klik tombol "Saldo" berdasarkan id elemen
document.getElementById('liatSaldo').addEventListener('click', () => {
	rekAmmar.liatSaldo();
});

// Nampilin data rekening user ketika klik tombol "Data Rekening" berdasarkan id elemen
document.getElementById('dataRek').addEventListener('click', () => {
	rekAmmar.liatDataRek();
});

class rekeningBank {
	// Deklarasi variabel saldo dengan private property dengan value awal = 0
	#saldo = 0;

	// Deklarasi constructor class
	constructor(props) {}

	// Method untuk setor uang
	deposit(jumlahUang) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Jika nilai varaibel jumlahUang merukpakan angka dan lebih dari 0
				if (!isNaN(jumlahUang) && jumlahUang > 0) {
					// Proses penammbahan saldo
					this.#saldo += jumlahUang;
					// Nyelesein promise dengan resolve jika berhasil
					resolve(
						`Kamu berhasil deposit sebesar Rp.${jumlahUang};.\nSaldo kamu sekarang adalah Rp.${
							this.#saldo
						};.`
					);
				} else {
					// Nolak promise dengan reject jika tidak berhasil
					reject(
						'Maaf, Jumlah uang yang kamu masukin nggak valid :(.'
					);
				}
			}, 2000);
		});
	}

	// Method untuk tarik uang
	withdraw(jumlahUang) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Jika nilai varaibel jumlahUang merukpakan angka dan lebih dari 0
				if (!isNaN(jumlahUang) && jumlahUang > 0) {
					if (jumlahUang <= this.#saldo) {
						// Proses pengurangan saldo
						this.#saldo -= jumlahUang;

						// Nyelesein promise dengan resolve jika berhasil
						resolve(
							`Kamu berhasil deposit sebesar Rp.${jumlahUang};.\nSaldo kamu sekarang adalah Rp.${
								this.#saldo
							};.`
						);
					} else {
						// Nolak promise dengan reject jika tidak berhasil
						reject('Yahhh...Maaf, saldo kamu nggak cukup nih :(');
					}
				} else {
					// Nolak promise dengan reject jika tidak berhasil
					reject(
						'Maaf, Jumlah uang yang kamu masukin nggak valid :(.'
					);
				}
			}, 2000);
		});
	}

	// Method nampilin saldo rekening
	liatSaldo() {
		alert(
			`===>>> SALDO <<<===\nSaldo kamu sekarang adalah Rp.${
				this.#saldo
			};.`
		);
	}

	// Method nampilin data rekening/akun bank
	liatDataRek() {
		const tgl = this.tglLahir.getDate();
		const bulan = this.tglLahir.getMonth() + 1;
		const tahun = this.tglLahir.getFullYear();
		alert(
			`===>>> DATA REKENING <<<===\nNama: ${this.nama}\nNo. Rekening: ${this.noRek}\nAlamat: ${this.alamat}\nTanggal Lahir: 0${tgl}-0${bulan}-${tahun}\nNo.Telepon: ${this.noHp}`
		);
	}
}

// Deklarasi object
let rekAmmar = new rekeningBank({
	nama: 'Ammar',
	noRek: '987654',
	alamat: 'Tegal',
	tglLahir: new Date('2003-03-08'),
	noHp: '0812345',
});
