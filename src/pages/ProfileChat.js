import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileChat.module.css";

const ProfileChat = () => {
  const navigate = useNavigate();

  const onMennuContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.profileChat}>
      <div className={styles.menu}>
        <div className={styles.menuMini}>
          <div className={styles.frameParent}>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/uangledoubleright.svg"
              />
            </div>
            <div className={styles.iconButtonParent}>
              <div className={styles.iconButton}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uhomealt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ulistul.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usuitcase.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ufilemedicalalt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usitemap.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uusersalt.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.uangleDoubleRightWrapper}>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/usetting.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.qunLTiKhonParent}>
              <div className={styles.qunLTi}>Quản lý tài khoản</div>
              <div className={styles.mennuParent}>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucreatedashboard.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Thông tin cá nhân</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/unotifiacation.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý thông báo</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu2} onClick={onMennuContainer2Click}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucommentdots.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Trò chuyện</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ulock.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đổi mật khẩu</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueditalt2.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý chữ ký</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ufileblank.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Tài liệu của tôi</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usignoutalt.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đăng xuất</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileChatChild} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.flow1Parent}>
            <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
            <div className={styles.avt}>
              <img
                className={styles.unsplashfgUd73uZmIcon}
                alt=""
                src="/unsplashfg-ud73u-zm@2x.png"
              />
              <div className={styles.state} />
              <div className={styles.label}>KA</div>
            </div>
            <div className={styles.overviewParent}>
              <div className={styles.qunLTi}>My Profile</div>
              <div className={styles.employees}>Employees</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.memberParent}>
              <div className={styles.member}>
                <div className={styles.avt1}>
                  <div className={styles.userpic} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>KA</div>
                </div>
                <div className={styles.avt2}>
                  <div className={styles.userpic1} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>NH</div>
                </div>
                <div className={styles.avt3}>
                  <div className={styles.userpic2} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>HN</div>
                </div>
                <div className={styles.avt4}>
                  <img className={styles.ovalCopy3} alt="" src="/flow-1.svg" />
                  <div className={styles.wrapper}>
                    <div className={styles.div}>+3</div>
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.usearchParent}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usearch.svg"
                  />
                  <input
                   type="text"
                   placeholder="Search..."
                   value={searchTerm}
                   onChange={handleInputChange}
                />
                </div>
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/flow-1.svg"
                />
              </div>
            </div>
            <div className={styles.uplusWrapper}>
              <img
                className={styles.ucreateDashboardIcon}
                alt=""
                src="/uplus.svg"
              />
            </div>
            <div className={styles.memberParent}>
              <div className={styles.component2}>
                <div className={styles.ucommentDotsWrapper}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucommentdots1.svg"
                  />
                </div>
                <div className={styles.component2Child} />
              </div>
              <div className={styles.component2}>
                <div className={styles.ucommentDotsWrapper}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/unotifiacation1.svg"
                  />
                </div>
                <div className={styles.component2Child} />
              </div>
              <div className={styles.unsplashfgUd73uZmWrapper}>
                <img
                  className={styles.unsplashfgUd73uZmIcon1}
                  alt=""
                  src="/unsplashfg-ud73u-zm1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.flow1Parent}>
              <div className={styles.trChuyn}>Trò chuyện</div>
              <div className={styles.container}>
                <div className={styles.div1}>03</div>
              </div>
            </div>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/uedit.svg"
            />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.inboxListParent}>
              <div className={styles.inboxList}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <div className={styles.userpic3} />
                    <div className={styles.state4} />
                    <div className={styles.label4}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList1}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <div className={styles.userpic4} />
                    <div className={styles.state4} />
                    <div className={styles.label4}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <div className={styles.userpic5} />
                    <div className={styles.state4} />
                    <div className={styles.label4}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.unsplashrxiav5lcWwIcon}
                      alt=""
                      src="/unsplashfg-ud73u-zm2@2x.png"
                    />
                    <div className={styles.state4} />
                    <div className={styles.label7}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList1}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.unsplashrxiav5lcWwIcon}
                      alt=""
                      src="/unsplashrxiav5lcww@2x.png"
                    />
                    <div className={styles.state4} />
                    <div className={styles.label7}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList1}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.unsplashrxiav5lcWwIcon}
                      alt=""
                      src="/unsplashn0--vdfdthg@2x.png"
                    />
                    <div className={styles.state4} />
                    <div className={styles.label7}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList1}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.unsplashrxiav5lcWwIcon}
                      alt=""
                      src="/unsplashfg-ud73u-zm2@2x.png"
                    />
                    <div className={styles.state4} />
                    <div className={styles.label7}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxList1}>
                <div className={styles.avtParent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.unsplashrxiav5lcWwIcon}
                      alt=""
                      src="/unsplashyd4ubmuntg0@2x.png"
                    />
                    <div className={styles.state4} />
                    <div className={styles.label7}>NH</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.emailTittleParent}>
                      <div className={styles.hmNay}>Avian Rizky</div>
                      <div className={styles.pm}>09:30PM</div>
                    </div>
                    <div className={styles.massage}>
                      Hi, can you play futsal this weekend?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.frameParent12}>
          <div className={styles.frameParent13}>
            <div className={styles.frameParent14}>
              <div className={styles.flow1Parent}>
                <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                <div className={styles.avt}>
                  <img
                    className={styles.unsplashM6gy9ohgiiIcon}
                    alt=""
                    src="/unsplash-m6gy9ohgii@2x.png"
                  />
                  <div className={styles.state12} />
                  <div className={styles.label12}>NH</div>
                  <img
                    className={styles.unsplashwnolnjo7ts8Icon}
                    alt=""
                    src="/unsplashwnolnjo7ts8@2x.png"
                  />
                </div>
                <div className={styles.nhmEWorkWrapper}>
                  <div className={styles.trChuyn}>Nhóm E-Work</div>
                </div>
              </div>
              <div className={styles.uuserPlusParent}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uuserplus.svg"
                />
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uellipsisv.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.chatParent}>
                <div className={styles.chat}>
                  <div className={styles.avtWrapper}>
                    <div className={styles.avt13}>
                      <div className={styles.userpic6} />
                      <div className={styles.state13} />
                      <div className={styles.label13}>NH</div>
                    </div>
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.noteWrapper}>
                      <div className={styles.div}>Ngọc Huyền</div>
                    </div>
                    <div className={styles.commentBubble}>
                      <div className={styles.gutsBubbleLeft}>
                        <div className={styles.emoji}>
                          Cheerful cowboys make Jolly Ranchers
                        </div>
                      </div>
                      <div className={styles.insertEmoticonParent}>
                        <img
                          className={styles.ucreateDashboardIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe}>
                    <div className={styles.emoji}>👎</div>
                    <div className={styles.vote}>1</div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe}>
                    <div className={styles.emoji}>🙈</div>
                    <div className={styles.vote}>1</div>
                  </div>
                </div>
                <div className={styles.chat1}>
                  <div className={styles.avtWrapper}>
                    <div className={styles.avt13}>
                      <div className={styles.userpic7} />
                      <div className={styles.state13} />
                      <div className={styles.label13}>KL</div>
                    </div>
                  </div>
                  <div className={styles.frameParent17}>
                    <div className={styles.noteContainer}>
                      <div className={styles.div}>Khánh Linh</div>
                    </div>
                    <div className={styles.commentBubble1}>
                      <div className={styles.gutsBubbleLeft1}>
                        <div className={styles.search}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean elit vitae turpis faucibus.
                        </div>
                      </div>
                      <div className={styles.insertEmoticonParent}>
                        <img
                          className={styles.ucreateDashboardIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.commentBubble2}>
                      <div className={styles.gutsBubbleLeftParent}>
                        <div className={styles.gutsBubbleLeft2}>
                          <div className={styles.search}>
                            Cheerful cowboys make Jolly Ranchers
                          </div>
                        </div>
                        <div className={styles.gutsEmojiUnHideMeWrapper}>
                          <div className={styles.gutsEmojiUnHideMe2}>
                            <div className={styles.emoji}>😍</div>
                            <div className={styles.vote2}>1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe}>
                    <div className={styles.emoji}>👎</div>
                    <div className={styles.vote}>1</div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe}>
                    <div className={styles.emoji}>🙈</div>
                    <div className={styles.vote}>1</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.dec222020}
              >{`Dec 22, 2020, 11:06 PM `}</div>
              <div className={styles.chatGroup}>
                <div className={styles.chat}>
                  <div className={styles.commentBubble3}>
                    <div className={styles.insertEmoticonParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                      <img
                        className={styles.replyIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                      <img
                        className={styles.replyIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                    </div>
                    <div className={styles.gutsBubbleLeft3}>
                      <div className={styles.note5}>
                        Cheerful cowboys make Jolly Ranchers
                      </div>
                    </div>
                  </div>
                  <div className={styles.avtWrapper1}>
                    <div className={styles.avt13}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon4}
                        alt=""
                        src="/unsplashfg-ud73u-zm3@2x.png"
                      />
                      <div className={styles.state13} />
                      <div className={styles.label15}>NH</div>
                    </div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe5}>
                    <div className={styles.emoji}>👎</div>
                    <div className={styles.vote}>1</div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe5}>
                    <div className={styles.emoji}>🙈</div>
                    <div className={styles.vote}>1</div>
                  </div>
                </div>
                <div className={styles.chat3}>
                  <div className={styles.commentBubbleParent}>
                    <div className={styles.commentBubble4}>
                      <div className={styles.insertEmoticonParent}>
                        <img
                          className={styles.ucreateDashboardIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                        <img
                          className={styles.replyIcon}
                          alt=""
                          src="/flow-1.svg"
                        />
                      </div>
                      <div className={styles.gutsBubbleLeft4}>
                        <div className={styles.note6}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sociis fermentum nunc mauris consecter
                        </div>
                      </div>
                    </div>
                    <div className={styles.commentBubble5}>
                      <div className={styles.commentBubbleInner}>
                        <div className={styles.commentBubbleInner}>
                          <div className={styles.gutsBubbleLeft5}>
                            <div className={styles.note5}>
                              Cheerful cowboys make Jolly Ranchers
                            </div>
                          </div>
                          <div className={styles.gutsEmojiUnHideMeContainer}>
                            <div className={styles.gutsEmojiUnHideMe7}>
                              <div className={styles.emoji}>😍</div>
                              <div className={styles.vote2}>1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.avtWrapper1}>
                    <div className={styles.avt13}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon4}
                        alt=""
                        src="/unsplashfg-ud73u-zm3@2x.png"
                      />
                      <div className={styles.state13} />
                      <div className={styles.label15}>NH</div>
                    </div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe5}>
                    <div className={styles.emoji}>👎</div>
                    <div className={styles.vote}>1</div>
                  </div>
                  <div className={styles.gutsEmojiUnHideMe5}>
                    <div className={styles.emoji}>🙈</div>
                    <div className={styles.vote}>1</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.dec222020}
              >{`Dec 22, 2020, 11:06 PM `}</div>
              <div className={styles.chat1}>
                <div className={styles.avtWrapper}>
                  <div className={styles.avt13}>
                    <div className={styles.userpic8} />
                    <div className={styles.state13} />
                    <div className={styles.label13}>VA</div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.noteContainer}>
                    <div className={styles.div}>Vũ Anh</div>
                  </div>
                  <div className={styles.commentBubble1}>
                    <div className={styles.gutsBubbleLeft1}>
                      <div className={styles.search}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean elit vitae turpis faucibus.
                      </div>
                    </div>
                    <div className={styles.insertEmoticonParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                      <img
                        className={styles.replyIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                      <img
                        className={styles.replyIcon}
                        alt=""
                        src="/flow-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.commentBubble2}>
                    <div className={styles.gutsBubbleLeftParent}>
                      <div className={styles.gutsBubbleLeft2}>
                        <div className={styles.search}>
                          Cheerful cowboys make Jolly Ranchers
                        </div>
                      </div>
                      <div className={styles.gutsEmojiUnHideMeWrapper}>
                        <div className={styles.gutsEmojiUnHideMe2}>
                          <div className={styles.emoji}>😍</div>
                          <div className={styles.vote2}>1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gutsEmojiUnHideMe}>
                  <div className={styles.emoji}>👎</div>
                  <div className={styles.vote}>1</div>
                </div>
                <div className={styles.gutsEmojiUnHideMe}>
                  <div className={styles.emoji}>🙈</div>
                  <div className={styles.vote}>1</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent19}>
            <div className={styles.avtParent6}>
              <div className={styles.component2}>
                <img
                  className={styles.unsplashrxiav5lcWwIcon}
                  alt=""
                  src="/unsplashfg-ud73u-zm2@2x.png"
                />
                <div className={styles.state4} />
                <div className={styles.label7}>NH</div>
              </div>
              <div className={styles.input1}>
                <div className={styles.usearchParent}>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/flow-1.svg"
                  />
                  <input
                   type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleInputChange}
                 />
                </div>
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/flow-1.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent20}>
              <div className={styles.emojiParent}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/emoji.svg"
                />
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uellipsisv.svg"
                />
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uimageupload.svg"
                />
              </div>
              <img
                className={styles.component23Icon}
                alt=""
                src="/component-23.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChat;
