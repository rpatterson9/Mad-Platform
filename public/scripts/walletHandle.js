const Handle = {
    mixToast : () => {
        return Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3400,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    },
    connect: (res) => {
        if (res === true){
            const Toast =  Handle.mixToast();
            Toast.fire({
                icon: 'success',
                title: 'Success Connect to Wallet'
            });
            Wallet.getAddress().then(r => Wallet.getBalance(r));
            $('.btn-connect').hide();
        }else{
            alert('Error, something problems happened');
        }
    },
    getAddress : (res) => {
        $('.btn-connect').hide();
        $('.dropdown-address').removeClass('d-none');
        $('.your-address').text(res);
    },
    getBalance : (res,type,dataToken) => {
        if (!dataToken){
            dataToken = {
                symbol : 'MAD',
                decimal : 9
            };
        }
        let bnb = parseFloat(web3.utils.fromWei(res.balanceBNB, 'ether')).toFixed(8);
        let mad = (res.balanceMAD * 10** -dataToken.decimal).toFixed(6);
        $('.your-symbol-token').text(dataToken.symbol);
        if(type){
            $(`#modalPaymentBNBLabel`).text(`Donate With ${type.toUpperCase()}`);
        }

        $('.your-balance').text(`${bnb} BNB | ${mad} MAD`);
        $('.your-balance-bnb').text(bnb);
        $('.your-balance-token').text(mad);
    },
    checkAllowance : (res) => {
        if (res === true){
            $('.btn-donate-modal').prop('disabled', false);
            $('.btn-donate-modal').show();
            $('.btn-approve-modal').hide();
        }else{
            $('.btn-donate-modal').hide();
            $('.btn-approve-modal').show();
        }
    },
    showAlertTxHash : (res) => {
        $('.btn-approve-modal').prop('disabled', true);
        $('.btn-donate-modal').prop('disabled', true);
        Swal.fire({
            icon: 'success',
            title: 'Success send transaction',
            html: `<a target="_blank" href="https://bscscan.com/tx/${res}">Show in bscscan</a>`,
        });
    },
    showToastSuccessTx : (res) => {
        const Toast = Handle.mixToast();
        Toast.fire({
            icon: 'success',
            title: 'Transaction Success',
            html: `<a target="_blank" href="https://bscscan.com/tx/${res}">Show in bscscan</a>`,
        });
    },
    getHistory : (res) => {
      let ul = $('#donate-history');
      ul.empty();
      for (let item of res.data){
          if(item.item === 'donation'){
              item.type = 'mad';
          }
          ul.append(`<li>${item.item} ${item.amount} ${item.type.toUpperCase()} <a target="_blank" href="https://bscscan.com/tx/${item.hash}"><i class="far fa-external-link"></i></a></li>`);
      }
    },
  

    getPriceMAD : (res) => {
        $('.BUSD_MAD').text(`${res.BUSD_MAD} MAD`);
        $('.MAD_BUSD').text(`${res.MAD_BUSD} BUSD`);
        $('.BNB_MAD').text(`${res.BNB_MAD} MAD`);
        $('.MAD_BNB').text(`${res.MAD_BNB} BNB`);
        $('.ETH_MAD').text(`${res.ETH_MAD} MAD`);
        $('.MAD_ETH').text(`${res.MAD_ETH} MAD`);
        console.log("****************")
        let cunt = res.BUSD_MAD 
        console.log(cunt)



    }
}
