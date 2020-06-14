 function toggle_visibility(id) {

 	 var home= document.getElementById('home');
 	 home.style.display ='none';

 	 var skills=document.getElementById('skills');
 	 skills.style.display ='none';

 	 var exp=document.getElementById('experience');
 	 exp.style.display ='none';

 	 var edu=document.getElementById('education');
 	 edu.style.display ='none';

 	 var contact=document.getElementById('contact');
 	 contact.style.display ='none';

     var e = document.getElementById(id);
     e.style.display = 'block';
	}