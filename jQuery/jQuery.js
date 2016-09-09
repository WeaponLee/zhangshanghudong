$(function(){
         //文本框失去焦点后
	    $('form :input').blur(function(){	
			 var $parent = $(this).parent();
			 $parent.find(".formtips").remove();
			 //验证用户名
			 if( $(this).is('#username') ){
					if( this.value=="" || this.value.length < 6 ){
					    var errorMsg = '请输入至少6位的密码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
					    var okMsg = '输入正确.';
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
			 //
			  if( $(this).is('#psd') ){
					if( this.value=="" || this.value.length < 6 ){
					    var errorMsg = '请输入至少6位的密码.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}else if($("#psd").val()!=$("#username").val()){
						var errorMsgs="两次输入不一致"
						$parent.append('<span class="formtips onError">'+errorMsgs+'</span>');
					}
					else{
					    var okMsg = '输入正确.';
					    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
			 //验证邮件
			 if( $(this).is('#email') ){
				if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                      var errorMsg = '请输入正确的E-Mail地址.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}else{
                      var okMsg = '输入正确.';
					  $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
				}
			 }
			 
		}).keyup(function(){
		   $(this).triggerHandler("blur");
		}).focus(function(){
	  	   $(this).triggerHandler("blur");
		});//end blur

		
		//提交，最终验证。
		 $('#send').click(function(){
			$("form :input").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					return false;
				} 
				alert("注册成功,密码已发到你的邮箱,请查收.");
		 });

		//重置
		 $('#res').click(function(){
				$(".formtips").remove(); 
		 });
});
//]]>
$(function(){
	$(".ih li").click(function(){
		$(this).addClass("current").siblings().removeClass()
		var sum=$(this).index();
		$(".a_navbar_r").eq(sum).show().siblings().hide();
	})
})