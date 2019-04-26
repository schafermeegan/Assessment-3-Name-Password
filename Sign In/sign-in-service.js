function SignInService () {
    const ctrl = this;

    ctrl.nameArray = [];
    ctrl.passArray = [];

    ctrl.setInfo = (content) => {
        ctrl.nameArray.push(content)
        ctrl.passArray.push(content)
        console.log(ctrl.nameArray);
        console.log(ctrl.passArray);
    }

   
}

angular.module('SignInApp')
.service('SignInService', SignInService)

