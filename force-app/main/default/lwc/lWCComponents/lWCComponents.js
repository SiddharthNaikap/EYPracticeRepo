import { LightningElement } from 'lwc';
import  LightningAlert from 'lightning/alert';

export default class LWCComponents extends LightningElement {

OpenSection = '';
isDVisible = false;
ActiveSections=['A'];
myScannerOptions={
    barcodeTypes: ["CODE_128", "QR", "EAN_13"],
    scannerSize: "LARGE"
}

handleToggle(e){
    this.isDVisible=!this.isDVisible;
}

handleSectionToggle(e){

    this.OpenSection=e.detail.openSections;
}

handleExpand(e){
this.ActiveSections=['A','B','C','D'];
}

handleClose(e){
    this.ActiveSections='';
}

async handleErrorClick(e){
    await LightningAlert.open({
        label: 'Error!', // this is the header text
        message: 'This is the error alert',
        theme: 'error', // a red theme intended for error states
    })

}
async handleWarningClick(e){
    await LightningAlert.open({
        label: 'Warning!', // this is the header text
        message: 'This is the Warning alert',
        theme: 'warning', // a red theme intended for error states
    })

}
async handleSuccessClick(e){
    await LightningAlert.open({
        label: 'Success!', // this is the header text
        message: 'This is the Success Alert',
        theme: 'success', // a red theme intended for error states
    })

}
}