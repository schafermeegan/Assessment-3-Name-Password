function SignIn(SignInService) {
    const ctrl = this;

    ctrl.saveClick = (name) => {
        SignInService.setInfo(name)
    }

    ctrl.saveClick = (pass) => {
        SignInService.setInfo(pass)
    }

}


angular
.module('SignInApp')
.component('signIn', {
    template: `
    <div>
    <input type="text" placeholder="Name" ng-model="$ctrl.nameInput" />
    <input type="text" placeholder="Password" ng-model="$ctrl.passwordInput" />
    <button ng-click="$ctrl.saveClick($ctrl.nameInput)" ng-click="$ctrl.saveClick($ctrl.passwordInput)">Submit</button>
    </div>
    `,

    controller: SignIn,

});
  