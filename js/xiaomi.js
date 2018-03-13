{
	let topBar=document.querySelector(".topbar");
	let leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>700){
			topBar.style.display="block";
		}else{
			topBar.style.display="none";
		}
		if(st > 2560){
			leftbar.style.display="block";

		}else{
			leftbar.style.display="none";
		}
	};
}

{
		let tips=document.querySelectorAll(".tips");
		let contents=document.querySelectorAll(".hot");
		console.log(tips,contents);
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=contents[index].offsetTop-200;//-200
				document.documentElement.scrollTop=ot;
				 let now=docunment.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
					}
					document.docunmentElement.scrollTop=now;
				},25)
			}
		})
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			// let obj=tips[0];
			for(let i=0;i<contents.length;i++){
				if(st>contents[i].offsetTop-200){
					// obj.classList.remove("active");
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active");
					}
					tips[i].classList.add("active");
					// obj=tips[i];

				}
			}
		})
		//给同一个页面弄很多的属性和事件
}


{
	let labels=document.querySelectorAll(".BN_nav li");
    let  menus=document.querySelectorAll(".title_xq");
    let  obj=menus[0];

    		console.log(labels,menus,obj);
    		labels.forEach(function(ele,index){
    			ele.onmouseenter=function(){
    				obj.style.display="none";
    				menus[index].style.display="block";
    				obj=menus[index];
    			}
    			ele.onmouseleave=function(){
    				menus[index].style.display="none";
    			}
    		})
}
