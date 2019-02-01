var i=0;
var z_index;
function GoBottom(){$(".wc__chatMsg-panel").animate({scrollTop: $("#J__chatMsgList").height()}, 0);}

function Request(strName)
{
	var strHref = window.document.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos + 1);
    var arrTmp = strRight.split("&");
    for(var i = 0; i < arrTmp.length; i++)
	{
		var arrTemp = arrTmp[i].split("=");
        if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
    }
    return "";
}
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
function end1111()
{
	var time=0;
	var text_editor=document.getElementById("text_editor");
	addMsg("other","海拉","薇拉薇拉薇拉薇拉薇拉","img/头像/海拉.png");
	print('怎么了……',() =>
	{
		time=0;
		setTimeout(() => {addMsg("other","海拉","你喜欢星空吗？","img/头像/海拉.png");}, time+=1000);
		setTimeout(() => 
		{
			print('如果是和不喜欢相对的提问，那么应该是喜欢吧。但是为什么突然这么问？',()=>
			{
				time=0;
				setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉疑问 .jpg">',"img/头像/薇拉.png");}, time+=1000);
				setTimeout(() => {addMsg("other","海拉","提问！","img/头像/海拉.png");}, time+=1000);
				setTimeout(() => {addMsg("other","海拉","答对了的话会奖励一个亲亲","img/头像/海拉.png");}, time+=1000);
				setTimeout(() => 
				{
				print('可以直接算我答错了吗？',()=>
				{
					time=0;
					setTimeout(() => {addMsg("other","海拉","为什么同样是对人类充满未知的区域，人类比起海洋更向往星空呢？","img/头像/海拉.png");}, time+=1000);
					setTimeout(() => {addMsg("other","海拉",'比如说在说到：“我有一个梦想”的时候，回答“我想要去宇宙”的人比起“我想要去海底”的人要压倒性的多。',"img/头像/海拉.png");}, time+=2000);
					setTimeout(() => 
					{
					print('诶',()=>
					{
						time=0;
						setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉疑问 .jpg">',"img/头像/薇拉.png");}, time+=1000);
						setTimeout(() => 
						{
						print('嗯……虽然我也不太清楚。',()=>
						{
							time=0;
							setTimeout(() => 
							{
							print('但是要说的话，和方位有关？比起“往下”，人觉得“往上”更富有希望？大概是语言含义和象征意义带给人潜移默化的影响之类的？',()=>
							{
								time=0;
								setTimeout(() => 
								{
								print('还有的话，就是“内”和“外”吧？进入大海是进入内部，而星空则是向外，拥有更多的可能性。大部分的人都会对“可能性”怀有憧憬吧？',()=>
								{
									time=0;
									setTimeout(() => {addMsg("other","海拉","答得真认真呀❤这么想要亲亲吗？","img/头像/海拉.png");}, time+=1000);
									setTimeout(() => 
									{
									print('那个就免了',()=>
									{
										time=0;
										setTimeout(() => {addMsg("other","海拉",'<img src="./img/表情/海拉/海拉笔心.gif">',"img/头像/海拉.png");}, time+=1000);
										setTimeout(() => {addMsg("other","海拉","那么，明明宇宙是更为未知的事物，为什么更多的人有“深海恐惧症”而不是“星空恐惧症”呢？","img/头像/海拉.png");}, time+=2000);
										setTimeout(() => 
										{
										print('嗯……话也许不能这么说？',()=>
										{
											time=0;
											setTimeout(() => 
											{
											print('不是有更多的人有“恐高症”吗？某种意义上也是对“在上面的事物”的恐惧的一种？',()=>
											{
												time=0;
												setTimeout(() => {addMsg("other","海拉","诶~这样算的话，“恐水症”也可以算在对海洋恐惧的一种呀~","img/头像/海拉.png");}, time+=1000);
												setTimeout(() => {addMsg("other","海拉",'<img src="./img/表情/海拉/海拉木大.gif">',"img/头像/海拉.png");}, time+=1000);
												setTimeout(() => 
												{
												print('说、说的也是……',()=>
												{
													time=0;
													setTimeout(() => {addMsg("other","海拉","说到底，为什么会对这些东西恐惧呢？虽然字面上能读懂，但是完全无法产生共鸣。","img/头像/海拉.png");}, time+=1000);
													setTimeout(() => {addMsg("other","海拉","恐惧到底是什么呢？","img/头像/海拉.png");}, time+=1000);
													setTimeout(() => 
													{
													print('海拉你没有害怕的东西吗？',()=>
													{
														time=0;
														setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉疑问 .jpg">',"img/头像/薇拉.png");}, time+=1000);
														setTimeout(() => {addMsg("other","海拉","没有哟！","img/头像/海拉.png");}, time+=1000);
														setTimeout(() => {addMsg("other","海拉",'<img src="./img/表情/海拉/海拉d登场+开心.gif">',"img/头像/海拉.png");}, time+=1000);
														setTimeout(() => 
														{
														print('那你想象一下，失去你很重要的东西或人的场面',()=>
														{
															time=0;
															setTimeout(() => {addMsg("other","海拉","那样的话我就会感觉到恐惧吗？","img/头像/海拉.png");}, time+=1000);
															setTimeout(() => 
															{
															print('一般来说是这样……',()=>
															{
																time=0;
																setTimeout(() => {addMsg("other","海拉","那，你愿意为了让我恐惧死掉吗？","img/头像/海拉.png");}, time+=1000);
																setTimeout(() => 
																{
																print('非常不愿意。',()=>
																{
																	time=0;
																	setTimeout(() => {addMsg("other","海拉",'<img src="./img/表情/海拉/海拉哭哭.jpg">',"img/头像/海拉.png");}, time+=1000);
																	setTimeout(() => 
																	{
																	print('……如果必须要死去的话，比起让你恐惧，我更希望能为了你的笑容死去……',()=>
																	{
																		time=0;
																		setTimeout(() => 
																		{
																		print('呜呜，不小心就认真起来了，说了些不切实际的难为情的话',()=>
																		{
																			time=0;
																			setTimeout(() => 
																			{
																			print('如果绫人在旁边肯定会嘲笑我的',()=>
																			{
																				time=0;
																				setTimeout(() => {addMsg("other","海拉","啊——","img/头像/海拉.png");}, time+=1000);
																				setTimeout(() => {addMsg("other","海拉","我刚刚感觉心跳的超厉害的！！！！","img/头像/海拉.png");}, time+=1000);
																				setTimeout(() => {addMsg("other","海拉","觉得心里像装了一勺岩浆炎一样热乎乎的！！","img/头像/海拉.png");}, time+=1000);
																				setTimeout(() => {addMsg("other","海拉","这、莫、非、就、是","img/头像/海拉.png");}, time+=1000);
																				setTimeout(() => {addMsg("other","海拉","爱❤","img/头像/海拉.png");}, time+=1000);
																				setTimeout(() => 
																				{
																				print('我想不是。',()=>
																				{
																					time=0;
																					setTimeout(() => 
																					{
																					print('而且我很为你的心脏状况担忧……',()=>
																					{
																						time=0;
																						setTimeout(() => {addMsg("other","海拉",'<img src="./img/表情/海拉/海拉笔心.gif">',"img/头像/海拉.png");}, time+=1000);
																						setTimeout(() => {addMsg("other","海拉","你现在到哪啦~","img/头像/海拉.png");}, time+=1000);
																						setTimeout(() => 
																						{
																						print('我快到楼顶了！',()=>
																						{
																							time=0;
																							setTimeout(() => {addMsg("other","海拉","那你等会到楼顶后，闭上眼睛在心里数3秒再睁开眼吧❤","img/头像/海拉.png");}, time+=1000);
																							setTimeout(() => {addMsg("other","海拉","不用担心摔跤，我会去牵你哒~","img/头像/海拉.png");}, time+=1000);
																							setTimeout(() => 
																							{
																							print('……为什么要闭眼呀',()=>
																							{
																								time=0;
																								setTimeout(() => {addMsg("other","海拉","我刚刚突然领悟了一件事","img/头像/海拉.png");}, time+=1000);
																								setTimeout(() => 
																								{
																								print('？',()=>
																								{
																									time=0;
																									setTimeout(() => {addMsg("other","海拉",'“开心”这种情绪，在与人分享后也许是会增殖的。',"img/头像/海拉.png");}, time+=1000);
																									setTimeout(() => 
																									{
																									print('？？那和要我闭上眼有什么关系？',()=>
																									{
																										time=0;
																										setTimeout(() => {addMsg("other","海拉",'我现在要做一个实验，证明我的想法是对的！',"img/头像/海拉.png");}, time+=1000);
																										setTimeout(() => 
																										{
																										print('？？？你不会要拿我做实验吧……',()=>
																										{
																											time=0;
																											setTimeout(() => {addMsg("other","海拉",'啊！我听到你的脚步声了！',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'快闭上眼睛，然后默数3秒！',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'3',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'2',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'1',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'可以睁眼了哦❤',"img/头像/海拉.png");}, time+=1000);
																											setTimeout(() => {addMsg("other","海拉",'<img src="./img/照片/1.1.1.1 海拉和薇拉的烟花/海拉烟花.jpg">',"img/头像/海拉.png");}, time+=1000);
																										});
																										},time+=1000);
																									});
																									},time+=1000);
																								});
																								},time+=1000);
																							});
																							},time+=1000);
																						});
																						},time+=1000);
																					});
																					},time+=1000);		
																				});
																				},time+=1000);	
																			});
																			},time+=1000);	
																		});
																		},time+=1000);	
																	});
																	},time+=1000);		
																});
																},time+=1000);	
															});
															},time+=1000);	
														});
														},time+=1000);
													});
													},time+=1000);
												});
												},time+=1000);
											});
											},time+=1000);
										});
										},time+=1000);
									});
									},time+=1000);
								});
								},time+=1000);
							});
							},time+=1000);
						});
						},time+=1000);
					});
					},time+=1000);
				});
				},time+=1000);
		});
	},time+=1000);
	});
}
function end2212()
{
	print('我觉得我们不能指望海拉……',() =>
	{
		time=0;
		setTimeout(() => 
		{
		print('如果真是到了不战斗不行的时候，我们应该采取更确实一点的手段……',()=>
		{
			time=0;
			setTimeout(() => 
			{
			print('如果让海拉参与进来，局面可能会变得难以控制……',()=>
			{
				time=0;
				setTimeout(() => {addMsg("other","绫人",'但是他有这个能力。',"img/头像/绫人.png");}, time+=1000);
				setTimeout(() => {addMsg("other","绫人",'他就像一次洗牌的机会，虽然可能会让局面变得更加糟糕，但同时也有带来转机的希望。',"img/头像/绫人.png");}, time+=1000);
				setTimeout(() => {addMsg("other","绫人",'不过这也只是一个保险，不到万不得已不会选择的一条道路。',"img/头像/绫人.png");}, time+=1000);
				setTimeout(() => {addMsg("other","绫人",'放心，我还准备了其他手段。',"img/头像/绫人.png");}, time+=1000);
				setTimeout(() => {addMsg("other","绫人",'但是以防万一，你得先去和海拉谈谈。',"img/头像/绫人.png");}, time+=1000);
				setTimeout(() => 
				{
				print('……如果他能听进我的话的话。',()=>
				{
					time=0;
					setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉流泪.jpg">',"img/头像/薇拉.png");}, time+=1000);
					setTimeout(() => 
					{
					print('总之一会我会试试的。',()=>
					{
						time=0;
						setTimeout(() => {addMsg("other","绫人",'对了，你东西买的怎么样了？',"img/头像/绫人.png");}, time+=1000);
						setTimeout(() => 
						{
						print('我已经买完了！',()=>
						{
							time=0;
							setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+=1000);
							setTimeout(() => {addMsg("other","绫人",'……',"img/头像/绫人.png");}, time+=1000);
							setTimeout(() => {addMsg("other","绫人",'我能拜托你一件事吗？',"img/头像/绫人.png");}, time+=1000);
							setTimeout(() => 
							{
							print('怎么了？',()=>
							{
								time=0;
								setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉疑问 .jpg">',"img/头像/薇拉.png");}, time+=1000);
								setTimeout(() => {addMsg("other","绫人",'……',"img/头像/绫人.png");}, time+=1000);
								setTimeout(() => {addMsg("other","绫人",'其实我本来打算自己去买的。',"img/头像/绫人.png");}, time+=1000);
								setTimeout(() => {addMsg("other","绫人",'但是我现在必须得去购置一些物件来准备对付年兽的陷阱。',"img/头像/绫人.png");}, time+=1000);
								setTimeout(() => {addMsg("other","绫人",'所以能麻烦你帮我买包棉花糖吗？',"img/头像/绫人.png");}, time+=1000);
								setTimeout(() => 
								{
								print('诶？！嗯，可以啊！',()=>
								{
									time=0;
									setTimeout(() => 
									{
									print('不过……诶？是那个零食的棉花糖吗？',()=>
									{
										time=0;
										setTimeout(() => {addMsg("other","绫人",'就是那个。',"img/头像/绫人.png");}, time+=1000);
										setTimeout(() => 
										{
										print('这好像不是清单上的物品吧？',()=>
										{
											time=0;
											setTimeout(() => {addMsg("other","绫人",'……不是。',"img/头像/绫人.png");}, time+=1000);
											setTimeout(() => 
											{
											print('诶？那是绫人你自己吃的吗？',()=>
											{
												time=0;
												setTimeout(() => {addMsg("other","绫人",'……',"img/头像/绫人.png");}, time+=1000);
												setTimeout(() => {addMsg("other","绫人",'没什么问题吧？',"img/头像/绫人.png");}, time+=1000);
												setTimeout(() => {addMsg("other","绫人",'本来也说好余下来的现金可以购买一些私人物品。',"img/头像/绫人.png");}, time+=1000);
												setTimeout(() => 
												{
												print('没有问题哦',()=>
												{
													time=0;
													setTimeout(() => 
													{
													print('只是绫人一直思考的方式都比较成熟，有时候都会忘记绫人还没有成年的事情了。',()=>
													{
														time=0;
														setTimeout(() => {addMsg("other","绫人",'呜哇。',"img/头像/绫人.png");}, time+=1000);
														setTimeout(() => {addMsg("other","绫人",'买包棉花糖和成没成年没关系吧。',"img/头像/绫人.png");}, time+=1000);	
														setTimeout(() => {addMsg("other","绫人",'……你该不会现在正露出那种老母亲一样的笑容吧。',"img/头像/绫人.png");}, time+=1000);
														setTimeout(() => 
														{
														print('诶、诶诶，我是这样笑的吗？',()=>
														{
															time=0;
															setTimeout(() => 
															{
															print('绫人你在我附近吗？',()=>
															{
																time=0;
																setTimeout(() => {addMsg("other","绫人",'<img src="./img/照片/2.2.1.2 绫人自拍/ayatp自拍2.jpg">',"img/头像/绫人.png");}, time+=1000);
																setTimeout(() => {addMsg("other","绫人",'我早就出超市了。',"img/头像/绫人.png");}, time+=1000);
																setTimeout(() => {addMsg("other","绫人",'不要再露出那种脸了，笨蛋吗你。',"img/头像/绫人.png");}, time+=1000);
																setTimeout(() => 
																{
																print('我、我只是觉得绫人很可爱啦……很符合你的年龄呀……',()=>
																{
																	time=0;
																	setTimeout(() => {addMsg("other","绫人",'觉得吃棉花糖就是小孩干的事和觉得年纪小的人就应该可爱都是不切实际的偏见。',"img/头像/绫人.png");}, time+=1000);
																	setTimeout(() => {addMsg("other","绫人",'退一万步讲，就算是小孩子才喜欢吃棉花糖，那也和我没关系，我只是太久没吃，突然有点想吃了而已。',"img/头像/绫人.png");}, time+=1000);
																	setTimeout(() => 
																	{
																	print('是这样啊',()=>
																	{
																		time=0;
																		setTimeout(() => 
																		{
																		print('棉花糖的口味你要哪一种？',()=>
																		{
																			time=0;
																			setTimeout(() => {addMsg("other","绫人",'草莓味。',"img/头像/绫人.png");}, time+=1000);
																			setTimeout(() => {addMsg("other","绫人",'你刚刚又在偷笑吧。',"img/头像/绫人.png");}, time+=1000);
																			setTimeout(() => 
																			{
																			print('没有啦www',()=>
																			{
																				setTimeout(() => 
																				{
																				print('“没有任何证据证明吃什么口味和个性有关系”，对吧？你只是单纯的想吃草莓味了而已吧？',()=>
																				{
																					setTimeout(() => {addMsg("other","绫人",'哼。',"img/头像/绫人.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'大惊小怪，不过是买个棉花糖而已。',"img/头像/绫人.png");}, time+=1000);
																					setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'不过你不准说出去，我买草莓味棉花糖的事情。',"img/头像/绫人.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'虽然并不是什么大事，但是被他们揶揄很烦。回击是不成问题，不过也没必要浪费精力在这种无意义的事上吧。',"img/头像/绫人.png");}, time+=2000);
																					setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'哼。',"img/头像/绫人.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'<img src="./img/表情/绫人/绫人点赞.jpg">',"img/头像/绫人.png");}, time+=1000);
																					setTimeout(() => {addMsg("other","绫人",'如果一切顺利的话，到时我就分点棉花糖给你做封口费吧。',"img/头像/绫人.png");}, time+=1000);
																				});
																				},time+=1000);
																			});
																			},time+=1000);
																		});
																		},time+=1000);	
																	});
																	},time+=1000);
																});
																},time+=1000);
															});
															},time+=1000);
														});
														},time+=1000);
													});
													},time+=1000);
												});
												},time+=1000);
											});
											},time+=1000);
										});
										},time+=1000);
									});
									},time+=1000);	
								});
								},time+=1000);	
							});
							},time+=1000);	
						});
						},time+=1000);
					});
					},time+=1000);
				});
				},time+=1000);
			});
			},time+=1000);
		});
		},time+=1000);


	});

}
function end2221()
{
	print('你在哪儿？',() =>
	{
		time=0;
		setTimeout(() => {addMsg("other","维尔德",'肉区和蔬菜区中间',"img/头像/维尔德.png");}, time+=1000);
		setTimeout(() => 
		{
		print('穆宁和你一块儿吗？',()=>
		{
			time=0;
			setTimeout(() => {addMsg("other","维尔德",'他去称鱼了',"img/头像/维尔德.png");}, time+=1000);
			setTimeout(() => 
			{
			print('如果你不知道饮料区在哪的话，需要我来找你吗？',()=>
			{
				time=0;
				setTimeout(() => {addMsg("other","维尔德",'没问题',"img/头像/维尔德.png");}, time+=1000);
				setTimeout(() => {addMsg("other","维尔德",'穆宁告诉我了',"img/头像/维尔德.png");}, time+=1000);
				setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+300);
				setTimeout(() => 
				{
				print('那我们就在厨具区碰头吧~',()=>
				{
					time=0;
					setTimeout(() => {addMsg("other","维尔德",'<img src="./img/表情/维尔德/维尔德点赞.jpg">',"img/头像/维尔德.png");}, time+=1000);
					setTimeout(() => {addMsg("other","维尔德",'@薇拉',"img/头像/维尔德.png");}, time+=1000);
					setTimeout(() => 
					{
					print('啊……私聊是不需要用艾特的，直接说就好啦！~',()=>
					{
						time=0;
						setTimeout(() => {addMsg("other","维尔德",'嗯',"img/头像/维尔德.png");}, time+=1000);
						setTimeout(() => {addMsg("other","维尔德",'不要勉强',"img/头像/维尔德.png");}, time+=1000);
						setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉疑问 .jpg">',"img/头像/薇拉.png");}, time+300);
						setTimeout(() => 
						{
						print('啊，是说战斗的事情吗？',()=>
						{
							time=0;
							setTimeout(() => 
							{
							print('谢谢你，但是不用担心，我会量力而为的。',()=>
							{
								time=0;
								setTimeout(() => 
								{
								print('毕竟我还有一个强大的同伴作为后盾啊',()=>
								{
									time=0;
									setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+300);
									setTimeout(() => {addMsg("other","维尔德",'交给我',"img/头像/维尔德.png");}, time+=1000);
									setTimeout(() => {addMsg("other","维尔德",'<img src="./img/表情/维尔德/维尔德力量.jpg">',"img/头像/维尔德.png");}, time+=1000);
									setTimeout(() => {addMsg("other","维尔德",'还有',"img/头像/维尔德.png");}, time+=1000);
									setTimeout(() => {addMsg("other","维尔德",'平时的压力',"img/头像/维尔德.png");}, time+=1000);
									setTimeout(() => {addMsg("other","维尔德",'也不要勉强',"img/头像/维尔德.png");}, time+=1000);
									setTimeout(() => 
									{
									print('……我表现的很明显吗？',()=>
									{
										time=0;
										setTimeout(() => {addMsg("other","维尔德",'你很害怕',"img/头像/维尔德.png");}, time+=1000);
										setTimeout(() => 
										{
										print('……',()=>
										{
											time=0;
											setTimeout(() => 
											{
											print('也许是这样的',()=>
											{
												time=0;
												setTimeout(() => {addMsg("other","维尔德",'不要怕',"img/头像/维尔德.png");}, time+=1000);
												setTimeout(() => {addMsg("other","维尔德",'我陪你',"img/头像/维尔德.png");}, time+=1000);
												setTimeout(() => {addMsg("me","薇拉",'<img src="./img/表情/薇拉/薇拉没没问题+点赞.jpg">',"img/头像/薇拉.png");}, time+300);
												setTimeout(() => 
												{
												print('谢谢你，维尔德。',()=>
												{
													time=0;
													setTimeout(() => {addMsg("other","维尔德",'<img src="./img/表情/维尔德/维尔德点赞.jpg">',"img/头像/维尔德.png");}, time+=1000);
													setTimeout(() => {addMsg("other","维尔德",'<img src="./img/照片/2.2.2.1 薇拉走过来/薇拉.jpg">',"img/头像/维尔德.png");}, time+=1000);
													setTimeout(() => {addMsg("other","维尔德",'看到了',"img/头像/维尔德.png");}, time+=1000);
													setTimeout(() => 
													{
													print('呵呵',()=>
													{
														time=0;
														setTimeout(() => 
														{
														print('我也看到你了',()=>
														{
															setTimeout(() => {addMsg("me","薇拉",'<img src="./img/照片/薇拉拍摄维尔德/薇拉拍摄维尔德.jpg">',"img/头像/薇拉.png");}, time+=1000);
														});
														},time+=1000);
													});
													},time+=1000);
												});
												},time+=1000);
											});
											},time+=1000);
										});
										},time+=1000);
									});
									},time+=1000);
								});
								},time+=1000);
								
							});
							},time+=1000);
						});
						},time+=1000);
					});
					},time+=1000);
				});
				},time+=1000);
			});
			},time+=1000);
		});
		},time+=1000);
	});
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
    z_index=parseInt(getStyle(indicate_state).zIndex);
	var branch=Request("branch_version");
	switch(branch)
	{
		case '1111':
			document.getElementById("title_name").innerHTML+='海拉';
			end1111();
		break;

		case '2212':
			document.getElementById("title_name").innerHTML+='绫人';
			end2212();
		break;

		case '2221':
			document.getElementById("title_name").innerHTML+='维尔德';
			end2221();
		break;

	}
}
