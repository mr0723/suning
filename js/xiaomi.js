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

//轮播图
{
	let imgs=document.querySelectorAll(".BN_gdt");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector(".BN");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	console.log(imgs);
	console.log(banner);
	pagers.forEach(function(ele,index){
			ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
			}
		})
	//让轮播图自己播放的效果
	let n=0;
	let t=setInterval(move,3000);
		function move() {
		n++;
		if(n===imgs.length){
			n=0; 
		}
		if(n<0){
			n=imgs.length-1;
		}
		for (let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		}
	//鼠标移入的时候，停止
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		//赋值一定要赋给t，使用全局变量t，不然的话，动画就会停不了，鼠标移入也没有意义。
		t=setInterval(move,3000);
	};
	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n-=2;
		move();
	};
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
{
	let content=document.querySelector(".content_neir")
	let prev=document.querySelector(".prev1")
	let next=document.querySelector(".next1")
	let inner=document.querySelector(".content_neir3")
	content.onmouseenter=function(){
		prev.style.display="block";
		next.style.display="block";
	}

	content.onmouseleave=function(){
		prev.style.display="none";
		next.style.display="none";
	}
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
		inner.style.transition="all 1s";
		inner.style.marginLeft=-1000*n+"px";
		}	
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
		inner.style.transition="all 1s";
		inner.style.marginLeft=-1000*n+"px";
		}	
	}
	inner.addEventListener("transitionend",function(){
			flag=true;
			if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
				n=1;
			}
			
			if(n===0){
				inner.style.transition="none";
				inner.style.marginLeft="-3000px";
				n=3;//N值要跟marginleft的值相匹配
			}	
		

	})

}
