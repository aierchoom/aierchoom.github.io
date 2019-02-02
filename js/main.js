var flag=0;
var i=0;
var T1;
var T2;
var z_index;
var branch_version='';
function GoBottom(){$(".wc__chatMsg-panel").animate({scrollTop: $("#J__chatMsgList").height()}, 0);}
function addMsg(li_class,name,text,head_picture)
	{
		var ul = document.getElementById("J__chatMsgList");
		//me/other,name
		if(li_class=="other")
		{
			ul.innerHTML+='<li class="others">\
							<a class="avatar" href="#"><img src="'+head_picture+'" /></a>\
							<div class="content">\
								<p class="author">'+name+'</p>\
								<div class="msg">\
									'+text+'\
								</div>\
							</div>\
						</li>';
				}
			else if(li_class=="me")
				{
					ul.innerHTML+='<li class="me">\
							<div class="content">\
								<p class="author">'+name+'</p>\
								<div class="msg" style="background-color: #95ec69">\
									'+text+'\
								</div>\
							</div>\
							<a class="avatar" href="#"><img src="'+head_picture+'" /></a>\
						</li>';
				}
				GoBottom();
				changeSize();
			}
function sendMessage(func)
{
	addMsg("me","薇拉",document.getElementById("text_editor").innerHTML,"img/头像/薇拉.png");
	document.getElementById("text_editor").innerHTML='';
	func();
}

function addTips(tips,text)
{
	var box=document.getElementById("bodybox");
	if(tips==1)
	{
		T1=document.createElement("div");
		T1.name='T1';
		T1.className='Tips';
		T1.innerHTML= text;
		T1.style.display='block';
		T1.style.top='10%'
		T1.addEventListener('click', Tip_Proc, false)
		box.insertBefore(T1,box.firstChild);
		return;
	}
	if(tips==2)
	{
		T2=document.createElement("div");
		T2.name='T2';
		T2.className='Tips';
		T2.innerHTML= text;
		T2.style.display='block';
		var top=box.clientHeight*0.25+T1.clientHeight;
		T2.style.top=top+'px';
		T2.addEventListener('click', Tip_Proc, false)
		box.insertBefore(T2,box.firstChild);
		return;
	}
}

function removeTip()
{
	var box=document.getElementById("bodybox");
	box.removeChild(T1);
	box.removeChild(T2);
}
function print(m_text,func)
{
	var text_editor=document.getElementById("text_editor");
	if(typeof(m_text[i])!="undefined")
	{
		text_editor.innerHTML+=m_text[i];
	}
	i++;
	if((i+1)<(m_text.length)){text_editor.innerHTML+=m_text[i];i++;}
	if(i<m_text.length){setTimeout(function(){print(m_text,func);},300)}
	else{i=0;sendMessage(func);}
}
function getStyle(element)
{
    if(window.getComputedStyle)
    {
        return window.getComputedStyle(element,null)
    }
    else
        return element.currentStyle;
}
function changeSize()
{
    var imgArray=document.getElementsByTagName("img");
    for(var i=0;i<imgArray.length;i++)
    {
    	imgArray[i].onload=function () {
            var style=getStyle(this);
            if((this.getAttribute("src").includes("表情")||this.getAttribute("src").includes("照片"))&&!this.className.includes("change"))
            {
                //alert(this.offsetWidth);
				if(z_index==1)
                this.style.width=Number(style.width.replace("px",""))*0.7+"px";
				else
                    this.style.width=Number(style.width.replace("px",""))*0.5+"px";
                this.className+="change";
            }
        }

    }
}
window.onload=function()
{
	var indicate_state=document.createElement("div");
	indicate_state.id="indicator";
	indicate_state.className="indicate_state";
	document.body.appendChild(indicate_state);
	z_index=parseInt(getStyle(document.getElementById("indicator")).zIndex);
	var time=0;
	setTimeout(function(){addMsg("other","艾丽莎",'咦',"img/头像/艾丽莎.png");},time+=1000);
	setTimeout(function(){addMsg("other","艾丽莎",'为什么这个超市没有猫蜘蛛的眼泪、龙鸟的鳞片、食人花的根卖呀？',"img/头像/艾丽莎.png");},time+=1000);
	setTimeout(function(){addMsg("other","艾丽莎",'<img src="img/表情/艾丽莎/爱丽疑惑.png">',"img/头像/艾丽莎.png");},time+=2000);
	setTimeout(function(){addMsg("other","绫人",'怎么可能会有啊。',"img/头像/绫人.png");},time+=3000);
	setTimeout(function(){addMsg("other","绫人",'拜托你看一下你的手机，上面写的清清楚楚，现在是在2019年2月4日，中国。',"img/头像/绫人.png");},time+=1000);
	setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.jpg">',"img/头像/绫人.png");},time+=2000);
	setTimeout(function(){addMsg("other","艾丽莎",'可是，我们是要为了给年兽做除夕饭才来超市购物的吧？',"img/头像/艾丽莎.png");},time+=3000);
	setTimeout(function(){addMsg("other","艾丽莎",'这个世界明明有年兽，却没有这些东西，很奇怪诶！',"img/头像/艾丽莎.png");},time+=2000);
	setTimeout(function(){addTips(1,'猫蜘蛛是什么？ ');addTips(2,'艾丽，你的东西买好了吗？');},time+=2000);
	setTimeout(function(){GoBottom()},time+=70);
}
function TipsFunc1(tip)
{
	var text=tip.innerHTML;
	removeTip();
	var time=0;
	var i= 0;
	var text_editor=document.getElementById("text_editor");
	switch(branch_version)
	{
	case '1':
			print(text,function()
				{
					time=0;
					setTimeout(function(){addMsg("other","艾丽莎",'你问到了我最心爱的小宝贝！',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'我以前还养过几只呢！',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'<img src="img/表情/艾丽莎/爱丽星星眼.png">',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'是猫和毛蜘蛛的结合体吗？！',"img/头像/奥登.png");},time+=3000);
					setTimeout(function(){addMsg("other","艾丽莎",'是的，体态像蜘蛛一样，但是却长着猫猫的脸和猫猫的茸毛~~！',"img/头像/艾丽莎.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'呕。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","穆宁",'这听起来可不怎么可爱^ ^',"img/头像/穆宁.png");},time+=1500);
					setTimeout(function(){addMsg("other","艾丽莎",'最重要的是！！！',"img/头像/艾丽莎.png");},time+=2000);
					setTimeout(function(){addMsg("other","艾丽莎",'猫蜘蛛有八个肉垫！！',"img/头像/艾丽莎.png");},time+=1500);
					setTimeout(function(){addMsg("other","海拉",'八个肉垫可舒服了！',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","海拉",'我曾经和猫蜘蛛握过爪，我作证！',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'对吧！猫蜘蛛的可爱简直就是国宝级别的！',"img/头像/艾丽莎.png");},time+=2000);
					setTimeout(function(){addMsg("other","艾丽莎",'……',"img/头像/艾丽莎.png");},time+=3000);
					setTimeout(function(){addMsg("other","艾丽莎",'咿咿咿咿咿咿——',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'<img src="img/表情/艾丽莎/爱丽惊恐.png">',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'为什么海拉会出现在我们的聊天室！',"img/头像/艾丽莎.png");},time+=3000);
					setTimeout(function(){addTips(1,'咦？！海拉什么时候不见的？');addTips(2,'艾丽，你没事吧……');},time+=2000);
					setTimeout(GoBottom,time+=70);
				});
		break;	
	case '11':
			addMsg("other","穆宁",'@薇拉 海拉不是在你身边吗？',"img/头像/穆宁.png");
			setTimeout(function()
			{
				print('在的。',function()
				  {
					time=0;
					setTimeout(function()
					{
					print(text,function()
						 {
							setTimeout(function(){addMsg("other","海拉",'3分钟前哦💖',"img/头像/海拉.png");},time+=1000);
							setTimeout(function(){addMsg("other","海拉",'<img src="img/表情/海拉/海拉d登场+开心.gif">',"img/头像/海拉.png");},time+=1000);
							setTimeout(function(){addMsg("other","绫人",'是我拉进来的，既然要一同行动，以防万一还是有联系比较好。',"img/头像/绫人.png");},time+=4000);
							setTimeout(function(){addMsg("other","海拉",'谢谢你绫人~不愧是我的前队友，这就是队友情吧',"img/头像/海拉.png");},time+=2000);
							setTimeout(function(){addMsg("other","海拉",'我现在就来找你玩哦~',"img/头像/海拉.png");},time+=1000);
							setTimeout(function(){document.getElementById("J__chatMsgList").innerHTML+='<li class="notice"><span>"<a href="#">海拉</a>已被移除群聊</span></li>';},time+=2000);
							setTimeout(function(){addTips(1,'……我会去找到他的。');addTips(2,'也不用直接移除吧。');},time+=2000);
							setTimeout(function(){GoBottom()},time+=70);
						});
					},time+=1000);
				});
			},time+=1000);
		break;
			
			
		case '12':
			setTimeout(function()
			{
				print(text,function()
				  {
					setTimeout(function(){addMsg("other","艾丽莎",'没事QAQ',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'我只是想起了一些不好的记忆……',"img/头像/艾丽莎.png");},time+=1500);
					setTimeout(function(){addMsg("other","穆宁",'那时真是辛苦你了……',"img/头像/穆宁.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'那真是一场灾难啊。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","维尔德",'（维尔德惊恐.表情包）',"img/头像/维尔德.png");},time+=3000);
					setTimeout(function(){addMsg("other","奥登",'啊？咋回事啊？',"img/头像/奥登.png");},time+=3000);
					setTimeout(function(){addMsg("other","海拉",'啊——是那事啊',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","海拉",'<img class="facePicture" src="./img/表情/海拉/海拉笔心.gif">',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'呜哇哇哇哇！！！',"img/头像/艾丽莎.png");},time+=3000);
					setTimeout(function(){addMsg("other","艾丽莎",'<img  src="./img/表情/艾丽莎/爱丽哭哭.png">',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'@海拉 你对爱丽做过些什么？！',"img/头像/奥登.png");},time+=2000);
					setTimeout(function(){addMsg("other","海拉",'没做什么啊？',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","海拉",'就是用她的身体',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'啊啊啊不要再说了！！亲爱的你不要问了啦！！',"img/头像/艾丽莎.png");},time+=500);
					setTimeout(function(){addMsg("other","奥登",'诶？！',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","穆宁",'噗，这个说法，停在这里也太让人误会了吧',"img/头像/穆宁.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'艾丽莎，如果奥登之后要去找海拉拼命，我觉得你是要负责的。',"img/头像/绫人.png");},time+=2000);
					setTimeout(function(){addTips(1,'……我会去找到他的。');addTips(2,'也不用直接移除吧。');},time+=2000);
					setTimeout(function(){GoBottom()},time+=70);
				});
			},time+=1000);
			break;
			
		case '111':	
		case '112':
			if(branch_version=='112')
			{
				branch_version='111';
				time+=text.length/2*300+500;
				print(text,function()
				{
					time=0;
					addMsg("other","绫人",'至少在灾难来临之前我想清静一点。',"img/头像/绫人.png");
				});
				
			}
			setTimeout(function()
			{
				print('……我会去找到他的。。',function()
				{
					time=0;
					setTimeout(function(){addMsg("other","穆宁",'拜托你了。',"img/头像/穆宁.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'为了整个超市的人的安全着想，务必要这么做。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'不然我很怕等会出超市门后走的不是油柏路而是真正意义上的“星光大道”了。',"img/头像/绫人.png");},time+=2000);
					setTimeout(function(){addMsg("other","奥登",'诶！！你的意思是他会把超市搬到宇宙里去吗？！这么酷的吗？！',"img/头像/奥登.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'我是怕他把这儿炸上天。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","海拉",'我觉得你这个主意不错，也许我可以试试让这个超市飞向宇宙~~',"img/头像/海拉.png");},time+=3000);
			
					setTimeout(function(){document.getElementById("J__chatMsgList").innerHTML+='<li class="notice"><span>"<a href="#">海拉</a>已被移除群聊</span></li>';},time+=2000);
					setTimeout(function(){addMsg("other","穆宁",'他怎么进来的？',"img/头像/穆宁.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'不知道也觉得没必要知道。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'其实我很好奇他接下来的话……他打算怎么让这个超市飞向宇宙啊……',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'<img src="img/表情/奥登/奥登沉思.jpg">',"img/头像/奥登.png");},time+=500);
					setTimeout(function(){addMsg("other","绫人",'不要去试图理解他的思路，你会发现那是个断崖。',"img/头像/绫人.png");},time+=3000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","穆宁",'薇拉，你去找找海拉看他在哪吧。',"img/头像/穆宁.png");},time+=3000);
					setTimeout(function(){addMsg("other","海拉",'我在屋顶哦~',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'@奥登 你不是黑客吗，想想办法啊',"img/头像/绫人.png");},time+=1500);
					setTimeout(function(){addMsg("other","奥登",'诶！我只是个业余的呀！而且我正在陪艾丽选东西呢……',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'另外艾丽不知道为什么，自从海拉出现后脸色一直不太好……',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'我没事的，亲爱的……大概吧。',"img/头像/艾丽莎.png");},time+=1500);
					setTimeout(function(){addMsg("other","穆宁",'@海拉 你在屋顶干什么呢？',"img/头像/穆宁.png");},time+=2000);
					setTimeout(function(){addMsg("other","海拉",'我买了很多中国过年的必备品——爆竹，烟花，鞭炮，打算来庆祝新年！',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'结束了。',"img/头像/绫人.png");},time+=3000);
					setTimeout(function(){addMsg("other","穆宁",'<img src="img/表情/穆宁/穆宁扶额.jpg">。',"img/头像/穆宁.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'？？？你们怎么了？',"img/头像/奥登.png");},time+=3000);
					setTimeout(function(){addMsg("other","海拉",'另外我刚路过车库时拆了一个引擎下来，我打算试试用鞭炮和引擎做一个火箭引擎，然后推算需要多少炮竹和引擎能载得动整个超市！',"img/头像/海拉.png");},time+=1000);
						
					setTimeout(function(){addMsg("other","海拉",'愿意和我一块的举手🙋',"img/头像/海拉.png");},time+=2000);
					setTimeout(function(){addMsg("other","奥登",'不要啊！！！！！！！！！',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'<img src="./img/表情/艾丽莎/爱丽哭哭.png">',"img/头像/艾丽莎.png");},time+=500);
					setTimeout(function(){addMsg("other","穆宁",'这你都做的到吗',"img/头像/穆宁.png");},time+=3000);
					setTimeout(function(){addMsg("other","维尔德",'可怕',"img/头像/维尔德.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'我就说这家伙会把这儿炸上天。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","海拉",'好！那就大家一起来做吧！',"img/头像/海拉.png");},time+=1000);
					setTimeout(function(){GoBottom()},time+=50);
					setTimeout(function(){addTips(1,'我来陪你吧，其他人还有东西要买。');addTips(2,'海拉，你在原地等我，我马上过来');},time+=2000);
					setTimeout(function(){GoBottom()},time+=70);
				});
			},time+=1000);
			break;
		case '1111':
			print(text,function()
			{
				setTimeout(function()
				{
					print('我现在就过来……',function()
				  	{
							setTimeout(function(){addMsg("other","艾丽莎",'薇拉！！！！QAQ',"img/头像/艾丽莎.png");},time+=1000);
							setTimeout(function(){addMsg("other","绫人",'<img src="./img/表情/绫人/绫人点赞.jpg">',"img/头像/绫人.png");},time+=1000);
							setTimeout(function(){addMsg("other","穆宁",'薇拉拜托你了。',"img/头像/穆宁.png");},time+=2000);
							setTimeout(function(){$("#TipMessage").fadeIn("slow");GoBottom();},time+=1000);
							//→海拉end
					});
				},time+=1000);
			});
			break;
			
		case '1112':
			print(text,function()
			{
				time=0;
				setTimeout(function(){addMsg("other","海拉",'哦哦哦~你要当第一个参与者吗？',"img/头像/海拉.png");},time+=1000);
				setTimeout(function(){addMsg("other","海拉",'欢迎欢迎，快来快来！',"img/头像/海拉.png");},time+=1000);
				setTimeout(function(){addMsg("other","海拉",'<img src="./img/表情/海拉/海拉笔心.gif">',"img/头像/海拉.png");},time+=1000);
				setTimeout(function(){addMsg("other","海拉",'不过我不能保证我会一直在地上等你。',"img/头像/海拉.png");},time+=3000);
				setTimeout(function(){addMsg("other","奥登",'你还要飞到天上去吗……',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'严格来说，本来你就不在地上，是在楼顶上。',"img/头像/绫人.png");},time+=1000);
				
				setTimeout(function()
				{
					print('我会尽快过来的。',function()
				  	{	
						addMsg("other","海拉",'你可以慢慢走过来，不然会错过好东西的',"img/头像/海拉.png");
						print('?',function()
				  		{
							setTimeout(function(){addMsg("other","海拉",'<img src="./img/照片/1.1.1.2 烟花/烟花.jpg">',"img/头像/海拉.png");},time+=1000);
							setTimeout(function(){addMsg("other","海拉",'快看窗外',"img/头像/海拉.png");},time+=4000);
							setTimeout(function(){addMsg("other","海拉",'是送给你的哦❤',"img/头像/海拉.png");},time+=1000);
						});	
					});
				},time+=1000)
			});
			break;
	}
			
}
function TipsFunc2(tip)
{
	
	var text=tip.innerHTML;
	removeTip();
	
	var time=0;
	var i= 0;
	var text_editor=document.getElementById("text_editor");
	
	switch(branch_version)
	{
	case '2':
			print(text,function()
			{
				setTimeout(function(){addMsg("other","艾丽莎",'买好了哟~',"img/头像/艾丽莎.png");},time+=1000);
				setTimeout(function(){addMsg("other","艾丽莎",'锵锵~~！',"img/头像/艾丽莎.png");},time+=1000);
				setTimeout(function(){addMsg("other","艾丽莎",'<img src="./img/照片/2 爱丽模具/爱丽 模具.jpg">',"img/头像/艾丽莎.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'我没记错的话，你要买的是饮料吧。',"img/头像/绫人.png");},time+=4000);
				setTimeout(function(){addMsg("other","绫人",'你为什么逛到厨具区去了。',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'艾丽说要做饼干给我们吃！',"img/头像/奥登.png");},time+=2000);
				setTimeout(function(){addMsg("other","奥登",'<img src="./img/表情/奥登/奥登星星眼.jpg">',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","艾丽莎",'你们想吃什么口味的~?',"img/头像/艾丽莎.png");},time+=3000);
			
				setTimeout(function(){addMsg("other","穆宁",'谢谢你，艾丽莎^ ^',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","穆宁",'不过在那之前我们得先完成给年兽的饭',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'不然我们就得在年兽的肚子里吃你的饼干了。',"img/头像/绫人.png");},time+=1500);
				setTimeout(function(){addMsg("other","穆宁",'……这次“事件”看起来简单',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){addMsg("other","穆宁",'但是如果没有做出让年兽满意的饭菜导致我们全都被他吃掉的话',"img/头像/穆宁.png");},time+=1500);
				setTimeout(function(){addMsg("other","穆宁",'之前还没出现过全员都死掉的情况，不知道还能不能继续复活……',"img/头像/穆宁.png");},time+=1500);
				setTimeout(function(){addMsg("other","穆宁",'还是说算作“时间停滞”，永远静止下去……',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){GoBottom()},time+=50);
				setTimeout(function(){addTips(1,'我觉得事态没有那么紧张，放轻松点，穆宁。');addTips(2,'以防万一，还是准备一点武器吧。');},time+=2000);
			
				setTimeout(function(){GoBottom()},time+=70);
			});
		break;	
	case '21':
			print(text,function()
			{
				tiem=0;
				setTimeout(function(){addMsg("other","绫人",'说的对，我们之前已经得到了“美味菜肴的秘方”了。',"img/头像/绫人.png");},time+=1500);
				setTimeout(function(){addMsg("other","绫人",'只要按照菜谱来做，没有问题的。',"img/头像/绫人.png");},time+=1500);
				setTimeout(function(){addMsg("other","穆宁",'谢谢你，薇拉，还有绫人^ ^',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){addMsg("other","维尔德",'什么味道都可以',"img/头像/维尔德.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'?',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","艾丽莎",'<img src="./img/表情/艾丽莎/爱丽疑惑.png">',"img/头像/艾丽莎.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'你该不会是在回复艾丽莎之前的话吧',"img/头像/绫人.png");},time+=3000);
				setTimeout(function(){addMsg("other","穆宁",'维尔德在和我一块儿买肉，我看了一下他的手机',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","穆宁",'<img src="./img/照片/2.1 手写输入法截图/手写输入法截图.jpg">',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","穆宁",'他之前是用的手写输入法，我已经帮他调成26键了^ ^',"img/头像/穆宁.png");},time+=3000);
				setTimeout(function(){addMsg("other","维尔德",'复活',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","维尔德",'<img src="./img/照片/2.1 维尔德和鱼，薇拉和鱼丸/维尔德拿鱼.jpg">',"img/头像/维尔德.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'买到鱼了',"img/头像/维尔德.png");},time+=4000);
				setTimeout(function(){addMsg("other","穆宁",'@薇拉 海拉还在你身边吗',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","海拉",'<img src="./img/照片/2.1 维尔德和鱼，薇拉和鱼丸/薇拉 5ge 鱼丸.jpg">',"img/头像/海拉.png");},time+=500);
				setTimeout(function(){addMsg("other","海拉",'<img src="./img/表情/海拉/海拉笔心.gif">',"img/头像/海拉.png");},time+=4000);
				setTimeout(function(){addMsg("other","海拉",'我在我在我——在———',"img/头像/海拉.png");},time+=3000);
				setTimeout(function(){addMsg("other","穆宁",'<img src="./img/表情/穆宁/穆宁点头.jpg">',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){addMsg("other","绫人",'我这边选完了',"img/头像/绫人.png");},time+=3000);
				setTimeout(function()
							{
								print('我们挑完鱼丸就可以了。',function()
									{
										time=0;
										setTimeout(function(){addMsg("other","艾丽莎",'我和亲爱的已经买好饮料了哦~',"img/头像/艾丽莎.png");},time+=1000);
										setTimeout(function(){addMsg("other","维尔德",'<img src="./img/表情/维尔德/维尔德点赞.jpg">',"img/头像/维尔德.png");},time+=1000);
										setTimeout(function(){addMsg("other","穆宁",'我和维尔德也弄完了，那么我们去门口集合吧^ ^',"img/头像/穆宁.png");},time+=2500);
										//jump to 穆宁END
									});
							},time+=500);
				});
			//(穆宁END)
		break;
			
	case '22':
			print(text,function()
			{
					time=0;
					setTimeout(function(){addMsg("other","绫人",'这里的枪支刀具管制很严格的，考虑到时间，现在我们能弄到杀伤力最大的东西就只有菜刀了。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'且不说用菜刀能不能打得过年兽……我们中间有几个人能够用短刀具战斗的？',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'人家不行！',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'<img src="./img/表情/艾丽莎/爱丽哭哭.png">',"img/头像/艾丽莎.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'我就没把你列入考虑范畴。',"img/头像/绫人.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","穆宁",'匕首长度……比如水果刀的话，简单的自卫我可以做到，战斗的话稍微有点',"img/头像/穆宁.png");},time+=3000);
					setTimeout(function(){addMsg("other","奥登",'其实武器不一定需要限制在短刀具',"img/头像/奥登.png");},time+=2000);
					setTimeout(function(){addMsg("other","奥登",'我曾经在中国用台球棍打倒了一平原的人。',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'<img src="img/表情/奥登/奥登沉思.jpg">',"img/头像/奥登.png");},time+=1000);
					setTimeout(function(){addMsg("other","艾丽莎",'哇哦，亲爱的！你真了不起！可是你不是说你从来没有出过国…',"img/头像/艾丽莎.png");},time+=3000);
					setTimeout(function(){addMsg("other","绫人",'我们并不在三国时代，这也不是在打电脑游戏，你清醒一点。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人摊手.png">',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","奥登",'可恶！为什么我不能用键盘战斗！',"img/头像/奥登.png");},time+=2000);
					setTimeout(function(){addMsg("other","绫人",'如果真的能把游戏实力转化为现实战力的话，我现在应该已经在征服宇宙的路上了。',"img/头像/绫人.png");},time+=1000);
					setTimeout(function(){addMsg("other","绫人",'<img src="img/表情/绫人/绫人沉思.jpg">',"img/头像/绫人.png");},time+=2000);
					
					setTimeout(function(){addTips(1,'如果需要的话，我可以战斗，绳、刀、棍，我都能用。但是要正面对抗年兽几乎是不可能的。');addTips(2,'我可以战斗……但是靠我一个人远远不够');},time+=3000);
					//1 jump to →绫人
					//2 jump to →维尔德
			});
		break;
	case '221':
			print(text,function()
			{
				time=0;
				setTimeout(function(){addMsg("other","绫人",'正面对抗确实是几乎不可能的……',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'所以我们得做点别的准备。',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'@薇拉 海拉还在你边上吗',"img/头像/绫人.png");},time+=2000);
					
				setTimeout(function(){addTips(1,'还在呢');addTips(2,'我觉得我们不能指望海拉……');},time+=50);
			});
			//2212 private chat
		break;
	case '222':
			print(text,function()
			{
				setTimeout(function(){addMsg("other","奥登",'@维尔德 我听艾丽说，维尔德战斗力不是很高吗？',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'嗯',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","维尔德",'很高？',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","奥登",'为啥前句是肯定，后句是疑问呀',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'我只是打倒我能打倒的敌人',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){addMsg("other","奥登",'莫、莫名的好帅！',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'薇拉要战斗的话',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){addMsg("other","维尔德",'我也',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","维尔德",'我会保护好薇拉的',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","奥登",'也拜托你保护我们了！',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'<img src="./img/表情/奥登/奥登星星眼.jpg">',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'好',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){addMsg("other","穆宁",'……没问题吗？对手可是年兽哦',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'嗯',"img/头像/维尔德.png");},time+=2000);
				setTimeout(function(){addMsg("other","维尔德",'只有菜刀吗?',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){addMsg("other","穆宁",'目前看来，能获得的威力最大的武器就只有菜刀了…',"img/头像/穆宁.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'我只打倒我能打倒的敌人',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){addMsg("other","奥登",'为什么几乎是一样的话现在却只听着好让人不安啊',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'<img src="./img/表情/奥登/奥登扶额.jpg">',"img/头像/奥登.png");},time+=1000);
					
				setTimeout(function(){addTips(1,'我和维尔德一起的话说不定可以做到');addTips(2,'至少，我会努力保证大家的安全');},time+=3000);
			});
			
		break;
	case '2211':
			addMsg("other","海拉",'我听到有人在呼唤我！',"img/头像/海拉.png");
			print(text,function()
			{
				time=0;
				setTimeout(function(){addMsg("other","绫人",'没人在喊你，我艾特的是薇拉。',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'@薇拉 你看好他了，别让他瞎捣鼓，我们得到的现金可不够赔偿钱。',"img/头像/绫人.png");},time+=2000);
				setTimeout(function()
				{
					print("哈哈哈……",function()
					{
						time=0;
						print("我已经在努力做了… ",function()
							{
								time=0;
								setTimeout(function(){addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉吐魂.jpg">',"img/头像/薇拉.png");},time+=1000);
								setTimeout(function(){addMsg("other","海拉",'<img src="./img/表情/海拉/海拉木大.gif">',"img/头像/海拉.png");},time+=3000);
								setTimeout(function(){addMsg("other","艾丽莎",'薇拉QAQ',"img/头像/艾丽莎.png");},time+=3000);
								setTimeout(function(){addMsg("other","艾丽莎",'辛苦你了QAQ',"img/头像/艾丽莎.png");},time+=1000);
								setTimeout(function(){addMsg("other","穆宁",'@绫人 我记得我们的现金在买完清单上的食材后应该还有剩余？',"img/头像/穆宁.png");},time+=1000);
								setTimeout(function(){addMsg("other","绫人",'原本是这样。',"img/头像/绫人.png");},time+=1000);
								setTimeout(function(){addMsg("other","绫人",'但是恐怕我等会得去进行一些材料的购置。',"img/头像/绫人.png");},time+=1500);
								setTimeout(function(){addMsg("other","绫人",'为了预防那只一年只闹腾几天的神兽的起床气，我想多做些准备。',"img/头像/绫人.png");},time+=2000);
								setTimeout(function(){addMsg("other","绫人",'具体的等我们见面再说吧。',"img/头像/绫人.png");},time+=1000);
								setTimeout(function(){addMsg("other","穆宁",'好的',"img/头像/穆宁.png");},time+=1000);
								setTimeout(function(){addMsg("other","绫人",'@穆宁 记得带上维尔德，不管怎么计划，维尔德的战力都很重要。',"img/头像/绫人.png");},time+=2000);
								setTimeout(function(){addMsg("other","绫人",'而且你不带上他的话，恐怕他能不能在今天内走出超市都是个问题。',"img/头像/绫人.png");},time+=1500);
								setTimeout(function(){addMsg("other","穆宁",'哈哈，我不会忘记带着他的^ ^',"img/头像/穆宁.png");},time+=1000);
								setTimeout(function(){addMsg("other","绫人",'@薇拉 你也是，你对这次计划很重要。',"img/头像/绫人.png");},time+=2000);
								setTimeout(function()
								{
									print("需要我做的我都会去做的。",function()
									{
										time=0;
										setTimeout(function(){addMsg("other","绫人",'OK。',"img/头像/绫人.png");},time+=1000);
										setTimeout(function(){addMsg("other","绫人",'先赶紧买完菜，咱们去超市门口碰头吧。',"img/头像/绫人.png");},time+=2000);
										//jump to →NORMAL END 2
									});
								},time+=1000);
							});
						});
				},time+=1000);
			});
		break;
	case '2212':
			setTimeout(function(){window.location.href="private_chat.html?branch_version=2212";},2000);
		break;
	case '2221':
			print(text,function()
			{
				time=0;
				setTimeout(function()
				{
					print("之前的世界里也见识过维尔德的本事",function()
					{
						time=0;
						setTimeout(function()
						{
							print("如果能做好计划的话，说不定真的能办到！",function()
							{
							
								time=0;
								setTimeout(function(){addMsg("other","绫人",'确实，如果有维尔德的身体能力再加上薇拉的辅助的话，说不定能够施行一些比较困难的方案……',"img/头像/绫人.png");},time+=2000);
								setTimeout(function(){addMsg("other","绫人",'我有几个方案，等会汇合了，我们一起商量一下吧。',"img/头像/绫人.png");},time+=2000);
								setTimeout(function(){addMsg("other","绫人",'薇拉，维尔德，你们俩先去厨具区买点顺手的东西做武器吧。',"img/头像/绫人.png");},time+=1000);
								setTimeout(function(){addMsg("other","艾丽莎",'啊，厨具区的话在饮料区右边通道的尽头哦！',"img/头像/艾丽莎.png");},time+=1000);
								setTimeout(function()
								{
									print("好的，谢谢你艾丽！",function()
									{
										time=0;
										setTimeout(function(){addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");},time+=1000);
										setTimeout(function(){addMsg("other","维尔德",'<img src="./img/表情/维尔德/维尔德点赞.jpg">',"img/头像/维尔德.png");},time+=3000);
										setTimeout(function(){window.location.href="private_chat.html?branch_version=2221";},2000);
									});
								},time+=1000);
							});
						},time+=1000);
					});
				},time+=1000);
					
			});
		break;
	case '2222':
			print(text,function()
			{
				time=0;
				setTimeout(function(){addMsg("other","绫人",'不。',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","绫人",'如果真的走到不得不战斗且无法敌过的最坏情况，你们要做的不是保护我们，而是保护自己逃出去。',"img/头像/绫人.png");},time+=2000);
				setTimeout(function(){addMsg("other","奥登",'诶？！',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'也就是说，最坏的情况……我们会死吗？！',"img/头像/奥登.png");},time+=3000);
				setTimeout(function(){addMsg("other","奥登",'<img src="./img/表情/奥登/奥登惊恐.jpg">',"img/头像/奥登.png");},time+=1000);
				setTimeout(function(){addMsg("other","奥登",'虽然听艾丽说过，即使不小心死掉了还是可以在下个世界复活……但是我还没死过啊！！果然还是有点怕啊！！！',"img/头像/奥登.png");},time+=3000);
				setTimeout(function(){addMsg("other","穆宁",'但是，如果不让薇拉和维尔德逃出去的话，我们可能会被全灭……',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){addMsg("other","穆宁",'但这是我们从没有试过的情况……谁也不知道会怎么样',"img/头像/穆宁.png");},time+=2000);
				setTimeout(function(){addMsg("other","绫人",'是的，所以保险起见，如果真的到了那时候，你们得先保证自己活下来，再来寻找其他完成事件的方法。',"img/头像/绫人.png");},time+=2000);
				setTimeout(function(){addMsg("other","绫人",'毕竟只要你们完成了事件，到了下一个世界，我们就全都能复活了。',"img/头像/绫人.png");},time+=1000);
				setTimeout(function(){addMsg("other","维尔德",'嗯',"img/头像/维尔德.png");},time+=3000);
				setTimeout(function(){print("……我明白了",function(){});	},time+=2000);
			});
		break;
	}
	
}

function Tip_Proc()
{
	if(this.name=='T1')
	{
		branch_version+='1';
	}
	else if(this.name=='T2')
	{
		branch_version+='2';
	}
	
	if(branch_version[0]=='1')
	{
		TipsFunc1(this);
	}
	else if(branch_version[0]=='2')
	{
		TipsFunc2(this);
	}
}