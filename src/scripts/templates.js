angular.module('templates-main', ['404.tpl.html', 'home.tpl.html', 'scripts/common/account/assets/templates/account.tpl.html', 'scripts/common/account/assets/templates/accountLinkedAccounts.tpl.html', 'scripts/common/account/assets/templates/accountMenu.tpl.html', 'scripts/common/account/assets/templates/accountPassword.tpl.html', 'scripts/common/account/assets/templates/accountSecurity.tpl.html', 'scripts/common/account/assets/templates/accountShow.tpl.html', 'scripts/common/account/assets/templates/benefits.tpl.html', 'scripts/common/account/assets/templates/changeForgottenPassword.tpl.html', 'scripts/common/account/assets/templates/forgotPassword.tpl.html', 'scripts/common/account/assets/templates/register.tpl.html', 'scripts/common/account/assets/templates/registerShow.tpl.html', 'scripts/common/account/assets/templates/resendActivation.tpl.html', 'scripts/common/account/assets/templates/terms.tpl.html', 'scripts/common/security/login/assets/templates/form.tpl.html', 'scripts/common/security/login/assets/templates/login.tpl.html', 'scripts/common/security/login/assets/templates/toolbar.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<p>This is the 404 page!</p>");
}]);

angular.module("home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.tpl.html",
    "<p>This is the home page!</p>");
}]);

angular.module("scripts/common/account/assets/templates/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/account.tpl.html",
    "<h1>{{account.first}} {{account.last}}</h1><div class=row><div class=span3 data-ng-include=\"\" data-src=\"'scripts/common/account/assets/templates/accountMenu.tpl.html'\"></div><div class=span9 ui-view=\"\"></div></div>");
}]);

angular.module("scripts/common/account/assets/templates/accountLinkedAccounts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/accountLinkedAccounts.tpl.html",
    "<div class=span3><div ng-show=facebook><h3>Facebook <button class=\"btn pull-right\" type=remove ng-click=\"removeLinkedAccount(facebook.provider, facebook._id)\"><i class=icon-remove-sign></i></button></h3><img ng-src=\"{{facebook.picture}}\"></div><div ng-hide=facebook><p><a class=hand ng-click=\"oAuth('facebook')\">Link your Facebook Account</a></p><a class=\"btn btn-large\" ng-click=\"oAuth('facebook')\"><img src=\"/images/8d2f994e.facebook.png\">&nbsp; Facebook &nbsp; &nbsp;</a></div></div><div class=\"span3 pull-right\"><div ng-show=google><h3>Google <button class=\"btn pull-right\" type=remove ng-click=\"removeLinkedAccount(google.provider, google._id)\"><i class=icon-remove-sign></i></button></h3><img ng-src=\"{{google.picture}}\"></div><div ng-hide=google><p><a class=hand ng-click=\"oAuth('google')\">Link your Google Account</a></p><a class=\"btn btn-large\" ng-click=\"oAuth('google')\"><img src=\"/images/e102d9f8.google.png\">&nbsp; Google &nbsp; &nbsp; &nbsp; &nbsp;</a></div></div>");
}]);

angular.module("scripts/common/account/assets/templates/accountMenu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/accountMenu.tpl.html",
    "<div class=\"nav nav-list\" id=account-nav><ul><li><a href=\"/account\">Profile</a></li><li><a href=\"/account/editPassword\">Password</a></li><li><a href=\"/account/linkedAccounts\">Linked Accounts</a></li><li><a href=\"/account/security\">Security</a></li></ul></div>");
}]);

angular.module("scripts/common/account/assets/templates/accountPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/accountPassword.tpl.html",
    "<div ng-show=account.hasPassword><form class=\"well form-horizontal\" name=PasswordChange><div class=control-group><label class=control-label for=currentPassword>Current Password</label><div class=controls><input id=currentPassword class=span3 required=\"\" type=password ng-model=password.currentPassword></div></div><hr><div class=control-group><label class=control-label for=newPassword>New Password</label><div class=controls><input id=newPassword class=span3 required=\"\" type=password ng-model=password.newPassword></div></div><div class=control-group><label class=control-label for=passwordConfirm>Confirm New Password</label><div class=controls><input id=passwordConfirm class=span3 required=\"\" type=password ng-model=password.passwordConfirm></div></div><div class=form-actions><button class=\"btn btn-primary\" type=submit ng-click=\"update()\" ng-disabled=\"PasswordReset.$invalid\">Update</button></div></form></div><div class=span9 ng-hide=account.hasPassword><h3>Request a password</h3><p>As you have registered through a social site you have not setup a password for this site yet. Click on the button below and we'll send you out a link to create a password.</p><button class=\"btn btn-large\" ng-click=\"sendPasswordLink(account.email)\" ng-disabled=sent>Send Password Link</button></div>");
}]);

angular.module("scripts/common/account/assets/templates/accountSecurity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/accountSecurity.tpl.html",
    "<div ng-show=cookies.length><h3>Logged In</h3><table class=\"table table-hover table-striped\"><thead><tr><th>#</th><th>Country</th><th>City</th><th>Browser</th><th>OS</th><th>Date</th><th>Remove</th><tbody><tr ng-repeat=\"cookie in cookies | orderBy:'cookie.created'\"><td>{{$index + 1}}</td><td>{{cookie.country}}</td><td>{{cookie.city}}</td><td>{{cookie.browser}}</td><td>{{cookie.os}}</td><td>{{cookie.created | date:'dd MMMM yyyy hh:mm a'}}</td><td><button class=btn type=remove ng-click=\"removeToken(cookie._id)\"><i class=icon-remove-sign></i></button></td></table></div><div ng-hide=cookies.length><p>There are no cookies in use</p></div>");
}]);

angular.module("scripts/common/account/assets/templates/accountShow.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/accountShow.tpl.html",
    "<form class=\"well form-horizontal\" name=EditProfile><div class=control-group><label class=control-label for=first>First Name</label><div class=controls><input class=span3 ng-model=account.first required=\"\" ng-disabled=\"!editCheck()\"></div></div><div class=control-group><label class=control-label for=name>Last Name</label><div class=controls><input class=span3 ng-model=account.last required=\"\" ng-disabled=\"!editCheck()\"></div></div><div class=control-group><label class=control-label for=email>Email</label><div class=controls><input class=span3 ng-model=account.email required=\"\" ng-disabled=\"!editCheck()\"></div></div><div class=control-group><label class=control-label for=gender>Gender</label><div class=controls><select data-ng-model=account.gender class=input-large ng-disabled=\"!editCheck()\"><option value=\"\">-- Please Select --<option ng-repeat=\"gender in genders\" value=\"{{gender.value}}\" ng-selected=\"gender.value == account.gender\">{{gender.name}}￼￼￼￼￼￼￼￼</select><span class=help-block data-ng-show=\"EditProfile.gender.$error.required && EditProfile.gender.$dirty\">Please select a gender.</span></div></div><div class=control-group><label class=control-label for=birthday>Birthday</label><div class=controls><input rsmdatedropdowns=\"\" ng-model=account.birthday ng-disabled=\"!editCheck()\"></div></div><div ng-show=\"editCheck()\"><hr><p>You need to enter your password to confirm these changes</p><div class=control-group><label class=control-label for=password>Password</label><div class=controls><input id=password class=span3 type=password ng-model=account.password></div></div></div><div class=form-actions ng-show=account.hasPassword><button class=\"btn btn-primary\" ng-show=\"!editCheck()\" ng-click=\"edit()\">Edit</button> <button class=\"btn btn-primary\" ng-show=\"editCheck()\" ng-click=\"update()\" ng-disabled=\"EditProfile.$invalid\">Update</button> <span ng-show=\"editCheck()\">or <a class=hand ng-click=\"cancelEdit()\">cancel</a></span></div><div class=form-actions ng-hide=account.hasPassword><p>As you have registered through a social site you have not setup a password for this site yet. If you want to edit any profile details please click on the button below to request a password.</p><button class=\"btn btn-large\" ng-controller=AccountPasswordCtrl ng-click=\"sendPasswordLink(account.email)\" ng-disabled=sent>Send Password Link</button></div></form>");
}]);

angular.module("scripts/common/account/assets/templates/benefits.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/benefits.tpl.html",
    "<div class=hero-unit><h1>Welcome to App!</h1><p>Some promotional message goes here. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p><a class=\"btn primary btn-large\">Explore &raquo;</a></p></div>");
}]);

angular.module("scripts/common/account/assets/templates/changeForgottenPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/changeForgottenPassword.tpl.html",
    "<form class=well name=form><div><h2>Reset Password</h2><div class=control-group><label class=control-label for=password>Password</label><div class=controls><input class=span2 data-ng-model=user.password type=password data-ng-minlength=6 required=\"\" matchfield=passwordSet><span class=help-block data-ng-show=\"form.$error.password[0].minlength && form.$error.password[0].$dirty\">Password must be a minimum of 6 characters</span></div></div><div class=control-group><label class=control-label for=passwordConfirm>Confirm Password</label><div class=controls><input class=span2 data-ng-model=user.passwordConfirm type=password required=\"\" matchfield=passwordSet><span class=help-block data-ng-show=\"form.passwordConfirm.$error.match && register.password.$dirty\">Passwords do not match</span></div></div><button class=\"btn btn-primary\" data-ng-disabled=\"form.$invalid\" data-ng-click=\"changeForgottenPassword()\">Change Password</button> or <a class=show-signup href=\"/register\">cancel</a></div></form>");
}]);

angular.module("scripts/common/account/assets/templates/forgotPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/forgotPassword.tpl.html",
    "<div><form class=well name=form><h2>Forgot Password</h2><div class=control-group><label class=control-label for=email>Email</label><div class=controls><input class=span3 type=email data-ng-model=user.email required=\"\"><span class=\"error help-block\" data-ng-show=\"form.$error.email[0].$invalid && form.$error.email[0].$dirty\">Please enter a valid email.</span></div></div><button class=\"btn btn-primary\" data-ng-disabled=\"form.$invalid\" data-ng-click=\"forgotPassword()\">Send Reset Link</button> or <a class=show-signup href=\"/register\">cancel</a></form></div>");
}]);

angular.module("scripts/common/account/assets/templates/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/register.tpl.html",
    "<div class=row><div class=span8 data-ng-include=\"\" data-src=\"'scripts/common/account/assets/templates/benefits.tpl.html'\"></div><div class=span4 ui-view=\"\"></div></div>");
}]);

angular.module("scripts/common/account/assets/templates/registerShow.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/registerShow.tpl.html",
    "<div><form class=well name=RegisterForm novalidate=\"\"><h2>Sign Up</h2><input class=input-small name=first data-ng-model=user.first required=\"\" placeholder=\"First Name\">&nbsp; &nbsp;<input class=input-small name=last data-ng-model=user.last required=\"\" placeholder=\"Last Name\"><input class=input-large name=email data-ng-model=user.email type=email required=\"\" placeholder=\"Email Address\"><span class=help-block data-ng-show=\"RegisterForm.email.$invalid && RegisterForm.email.$dirty\"><small>Please enter a valid email.</small></span><input class=input-large name=password data-ng-model=user.password type=password data-ng-minlength=6 required=\"\" placeholder=\"Enter a password\"><span class=help-block data-ng-show=\"RegisterForm.password.$invalid && RegisterForm.password.$dirty\"><small>Password must be a minimum of 6 characters.</small></span><select data-ng-model=user.gender class=input-large name=gender><option value=\"\">-- Please Select --<option ng-repeat=\"gender in genders\" value=\"{{gender.value}}\">{{gender.name}}￼￼￼￼￼￼￼￼</select><button class=\"btn btn-primary btn-large input-xlarge\" data-ng-click=\"registerUser()\" data-ng-disabled=\"RegisterForm.$invalid\">Sign up - it's free!</button><br><br><p align=center><small>Or sign up with</small><br><a class=hand ng-click=\"oAuth('facebook')\"><img src=\"/images/8d2f994e.facebook.png\"></a> <a class=hand ng-click=\"oAuth('google')\"><img src=\"/images/e102d9f8.google.png\"></a></p><p><small>By clicking Sign Up, you confirm that you agree to our <a href=\"\" id=terms data-ng-click=\"terms()\">User Agreement</a>.</small></p></form></div>");
}]);

angular.module("scripts/common/account/assets/templates/resendActivation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/resendActivation.tpl.html",
    "<form class=well name=form><div><h2>Resend Activation</h2><div class=control-group><label class=control-label for=email>Email</label><div class=controls><input id=email class=span3 type=email name=email data-ng-model=user.email required=\"\"><span class=help-block ng-show=\"form.$error.email[0].$invalid && form.$error.email[0].$dirty\">Please enter a valid email.</span></div></div><button class=\"btn btn-primary\" ng-disabled=\"form.$invalid\" ng-click=\"resendActivation()\" id=resend>Send Activation Link</button> or <a class=show-signup href=\"/register\">cancel</a></div></form>");
}]);

angular.module("scripts/common/account/assets/templates/terms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/account/assets/templates/terms.tpl.html",
    "<div class=modal-header><h2>Terms and Conditions</h2></div><div class=modal-body><p>Please read these terms of use carefully before you start to use the site. By using our site, you indicate that you accept these terms of use and that you agree to abide by them. If you do not agree to these terms of use, please refrain from using our site.</p><h4>RELIANCE ON INFORMATION POSTED & DISCLAIMER</h4><p>The materials contained on our site are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such.</p><p>We do not accept any responsibility for any loss which may arise from accessing or reliance on the information on this site and to the fullest extent permitted by English law, we exclude all liability for loss or damages direct or indirect arising from use of this site.</p><h4>INFORMATION ABOUT US</h4><p>[WEBSITE ADDRESS] is a site operated by [YOUR COMPANY NAME] (\"We\"); we are a [PARTNERSHIP / COMPANY / INDIVIDUAL] registered in England and Wales under registration number [REG NO.]. Our registered office is [OFFICE ADDRESS]. We have other offices at [OTHER OFFICES (IF APPLICABLE)]. Our VAT number is [VAT NUMBER].</p><p>We are regulated by the [REGULATORY BODY] and authorised and regulated by the [REGULATORY BODY].</p><h4>ACCESSING OUR SITE</h4><p>Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our site without notice (see below). We will not be liable if for any reason our site is unavailable at any time or for any period.</p><h4>INTELLECTUAL PROPERTY RIGHTS</h4><p>We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p><p>You may print off one copy, and may download extracts, of any page(s) from our site for your personal reference and you may draw the attention of others within your organisation to material posted on our site.</p><p>You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p><p>Our status (and that of any identified contributors) as the authors of material on our site must always be acknowledged.</p><p>You must not use any part of the materials on our site for commercial purposes without obtaining a licence to do so from us or our licensors.</p><p>If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p><h4>OUR SITE CHANGES REGULARLY</h4><p>We aim to update our site regularly, and may change the content at any time. If the need arises, we may suspend access to our site, or close it indefinitely. Any of the material on our site may be out of date at any given time, and we are under no obligation to update such material.</p><h4>OUR LIABILITY</h4><p>The material displayed on our site is provided without any guarantees, conditions or warranties as to its accuracy. To the extent permitted by law, we, and third parties connected to us hereby expressly exclude:</p><ul><li>All conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity.</li><li>Any liability for any direct, indirect or consequential loss or damage incurred by any user in connection with our site or in connection with the use, inability to use, or results of the use of our site, any websites linked to it and any materials posted on it, including, without limitation any liability for:</li><ul><li>loss of income or revenue;</li><li>loss of business;</li><li>loss of profits or contracts;</li><li>loss of anticipated savings;</li><li>loss of data;</li><li>loss of goodwill;</li><li>wasted management or office time; and</li></ul></ul><p>for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable, provided that this condition shall not prevent claims for loss of or damage to your tangible property or any other claims for direct financial loss that are not excluded by any of the categories set out above.</p><p>This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.</p><h4>INFORMATION ABOUT YOU AND YOUR VISITS TO OUR SITE</h4><p>We process information about you in accordance with our privacy policy [INSERT A LINK TO SITE'S PRIVACY POLICY]. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.</p><h4>VIRUSES, HACKING AND OTHER OFFENCES</h4><p>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack.</p><p>By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p><p>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it.</p><h4>LINKS FROM OUR SITE</h4><p>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. When accessing a site via our website we advise you check their terms of use and privacy policies to ensure compliance and determine how they may use your information.</p><h4>JURISDICTION AND APPLICABLE LAW</h4><p>The English courts will have non-exclusive jurisdiction over any claim arising from, or related to, a visit to our site.</p><p>These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p><h4>TRADE MARKS</h4><p>[TRADEMARK NAME] is a UK registered trade mark of [COMPANY NAME].</p><h4>VARIATIONS</h4><p>We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our site.</p><h4>YOUR CONCERNS</h4><p>If you have any concerns about material which appears on our site, please contact [EMAIL ADDRESS].</p><p>Thank you for visiting our site.</p></div>");
}]);

angular.module("scripts/common/security/login/assets/templates/form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/security/login/assets/templates/form.tpl.html",
    "<div class=span4><h3>Login</h3><form name=form class=login-form><div class=\"alert alert-warning\" ng-show=authReason>{{authReason}}</div><div class=\"alert alert-error\" ng-show=authError ng-bind-html=authError></div><div class=control-group><label class=control-label for=email>Email</label><div class=controls><input class=span3 ng-model=user.email type=email required=\"\"><span class=help-block ng-show=\"form.$error.email[0].$invalid && form.$error.email[0].$dirty\">Please enter a valid email.</span></div></div><div class=control-group><label class=control-label for=password>Password</label><div class=controls><input class=span3 ng-model=user.password type=password required=\"\"><br><a class=hand data-ng-click=\"forgotPassword()\">Forgot Your Password?</a></div></div><label class=checkbox>Keep me signed in<input class=\"check_boxes optional\" ng-model=user.remember_me type=checkbox checked></label><button class=\"btn btn-primary user\" ng-click=\"login()\" ng-disabled=\"form.$invalid\"><i class=\"icon-lock icon-white\"></i> Sign in</button> <button class=\"btn btn-warning cancel\" ng-click=\"cancelLogin()\">Cancel</button></form></div><div class=span3><br><p align=center>Or sign in with<br><a href=\"/auth/facebook\"><img src=\"/images/8d2f994e.facebook.png\"></a> <a href=\"/auth/google\"><img src=\"/images/e102d9f8.google.png\"></a></p><div ng-show=\"showResendLink()\"><hr><p>Click here to:</p><a class=hand ng-click=\"resendActivation()\">Resend Activation Link</a></div></div>");
}]);

angular.module("scripts/common/security/login/assets/templates/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/security/login/assets/templates/login.tpl.html",
    "<div class=row><div class=span8 data-ng-include=\"\" data-src=\"'scripts/common/account/assets/templates/benefits.tpl.html'\"></div><div class=span4><div data-ng-include=\"\" data-src=\"'scripts/common/security/login/assets/templates/form.tpl.html'\"></div></div></div>");
}]);

angular.module("scripts/common/security/login/assets/templates/toolbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/common/security/login/assets/templates/toolbar.tpl.html",
    "<ul class=\"nav pull-right\"><li class=divider-vertical></li><li ng-show=loading><div id=spinner><i class=\"icon-spinner icon-spin icon-large icon-light text-center\"></i></div></li><li data-ng-show=\"isAuthenticated()\" class=dropdown data-ng-class=\"{active:isNavbarActive('account'), open:isAccountOpen}\"><a href=\"\" id=accountMenu role=button class=dropdown-toggle data-ng-click=\"isAccountOpen=!isAccountOpen\">{{currentUser.first}} {{currentUser.last}}</a><ul class=dropdown-menu role=menu aria-labelledby=accountMenu><li><a tabindex=-1 href=\"/account\" data-ng-click=\"isAccountOpen=false\">Profile</a></li><li><a tabindex=-1 href=\"/account/editPassword\" data-ng-click=\"isAccountOpen=false\">Password</a></li><li><a tabindex=-1 href=\"/account/linkedAccounts\" data-ng-click=\"isAccountOpen=false\">Linked Accounts</a></li><li><a tabindex=-1 href=\"/account/security\" data-ng-click=\"isAccountOpen=false\">Security</a></li></ul></li><li data-ng-show=\"isAuthenticated()\" class=logout><form class=navbar-form><button class=\"btn logout\" data-ng-click=\"logout('register.show')\">Log out</button></form></li><li data-ng-hide=\"isAuthenticated()\" class=login><form class=navbar-form><button class=\"btn btn-success\" data-ng-click=\"register()\">Register</button> <button class=\"btn login\" data-ng-click=\"login()\">Log in</button></form></li></ul>");
}]);
