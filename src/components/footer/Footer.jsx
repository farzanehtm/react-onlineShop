import { Link } from "react-router-dom";
import {FaPhoneAlt,FaEnvelope,FaInstagram,FaTelegram,FaPinterest,FaFacebookSquare} from 'react-icons/fa'
import "./footer.css"

const Footer = () => {
  return (
    <section className="footer mt-4 mx-1">
      <div className="footerdiv1">
            <div className="row d-flex justify-content-evenly">
                <div className="col-12 col-md-10 d-flex flex-wrap sendingconditionfooter justify-content-around">

                    <div className="col-5 col-md-2 d-flex conditionforfooter align-items-center">
                        <img src="images/credit-union.png" alt="" />
                        <div className="sendingconditioninfo me-2">
                            <p className="toptitlecondistion">عضو اتحادیه</p>
                            <p className="subtitlecondition" style={{whiteSpace: 'nowrap'}}>کسب‌وکارهای مجازی</p>
                        </div>
                    </div>

                    <div className="col-5 col-md-2 d-flex conditionforfooter align-items-center">
                        <img src="images/Wallet.svg" alt="نحوه پرداخت در سایت خانومی"/>
                        <div className="sendingconditioninfo me-2">
                            <p className="toptitlecondistion" style={{whiteSpace: 'nowrap'}}>نحوه پرداخت</p>
                            <p className="subtitlecondition" style={{whiteSpace: 'nowrap'}}>تمامی کارتهای عضو شتاب</p>
                        </div>
                    </div>

                    <div className="col-5 col-md-2 d-flex conditionforfooter align-items-center">
                        <img src="images/free-shipping.svg" alt="ارسال رایگان محصولات خانومی"/>
                        <div className="sendingconditioninfo me-2">
                            <p className="toptitlecondistion" style={{whiteSpace: 'nowrap'}}>ارسال رایگان</p>
                            <Link href="/" className="subtitlecondition" style={{whiteSpace: 'nowrap'}}>جزییات هزینه ارسال</Link>
                        </div>
                    </div>
                    
                    <div className="col-5 col-md-2 d-flex conditionforfooter align-items-center">
                        <img src="images/7-Day.svg" alt="۷ روز بازگشت رایگان محصولات خانومی"/>
                        <div className="sendingconditioninfo me-2">
                            <p className="toptitlecondistion" style={{whiteSpace: 'nowrap'}}>۷ روز بازگشت رایگان</p>
                            <Link to="/" className="subtitlecondition" style={{whiteSpace: 'nowrap'}}>خدمات پس از فروش</Link>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <p className="text-center">ما را در شبکه های اجتماعی دنبال کنید</p>
                    <p className="d-flex justify-content-center justify-content-md-evenly">
                        <Link href="/"><FaInstagram color="#3f414d" fontSize="2em" /></Link>
                        <Link href="/"><FaTelegram color="#3f414d" fontSize="2em"  /></Link>
                        <Link href="/"><FaPinterest color="#3f414d" fontSize="2em" /></Link>
                        <Link href="/"><FaFacebookSquare color="#3f414d" fontSize="2em" /></Link>
                    </p>
                </div>
            </div>
      </div>

      <div className="footerdiv2">
            <div className="row">

                <div className="col-md-12">
                    <h4 style={{color:'#fff', marginBottom: '16px', fontSize:'18px', paddingRight:'7px'}}>دانلود برنامه‌های خانومی:</h4>
                </div>

                <div className="col-md-4">
                    <Link to="/" >
                        <img src="images/bazaar.svg"  style={{maxWidth: '200px', margin: "auto"}}/>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to="/">
                        <img src="images/iapps.svg" className="img-responsive" style={{maxWidth: '200px', margin: '0 auto 20px'}}/>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to="/">
                        <img src="images/myket.svg" className="img-responsive" style={{maxWidth: '200px', margin: '0 auto 20px'}}/>
                    </Link>
                </div>

                <div className="col-12 col-md-12 d-flex flex-wrap">
                    <div className="col-12 col-md-7  contactinfobox pt-3 pe-2">
                        <div className="contactinfo">
                            <p >
                                هفت روز هفته، از ساعت 8 الی 23 پاسخگوی سوالات شما هستیم.
                            </p>
                            <Link to="/" style={{color: '#fff'}}>
                                02112345000&nbsp;&nbsp;
                                <FaPhoneAlt />
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 px-3">
                        <p>
                            <span className="offerstext">
                                <FaEnvelope />
                                &nbsp;&nbsp; ایمیلت رو وارد کن تا از تخفیفها جا نمونی!
                            </span>
                        </p>
                        
                        <div className="gettinguseremail d-flex">
                            <input className="form-control inputuseremail" id="newfooteremail" name="newfooteremail" placeholder="ایمیل خود را وارد کنید"/>
                            <input className="submituseremail" type="button" value="ثبت"/>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      <div className="footerdiv3">
            <div className="row">
                <div className="col-md-12 d-flex">

                    <div className="col-md-3 pe-3">
                        <ul className="footer3list">
                            <li><Link to="/">نحوه انتخاب کالا</Link></li>
                            <li><Link to="/">نحوه خرید</Link></li>                             
                            <li><Link to="/">نحوه پرداخت</Link></li>
                            <li><Link to="/">نحوه استفاده از بن خرید</Link></li>
                            <li><Link to="/">نحوه خرید از تخفیف های شانس</Link></li>
                            <li><Link to="/">نحوه استفاده از هدیه برند</Link></li>
                            
                        </ul>
                    </div>

                    <div className="col-md-3 pe-3">
                        <ul className="footer3list">
                            <li><Link to="/">نحوه ارسال</Link></li>
                            <li><Link to="/">هزینه ارسال</Link></li>
                            <li><Link to="/">اطلاع از زمان‌بندی ارسال</Link></li>
                            <li><Link to="/">نحوه اطلاع از کد رهگیری</Link></li>     
                            <li><Link to="/">شرایط ضمانت ۷ روز بازگشت</Link></li>
                            <li><Link to="#">نحوه مرجوعی کالا</Link></li>
                            <li><Link to="#">نحوه تسویه حساب</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 pe-3">
                        <ul className="footer3list">
                            <figure className="m-0">
                                <Link to="/" id="tandis" target="_blank" rel="nofollow">
                                    <img src="images/tandis1401.jpg" alt="خانومی برنده تندیس زرین برند محبوب" style={{width:'120px', marginRight:'18%'}}/>
                                    <figcaption style={{marginTop: '5px',fontSize: '12px'}}>برنده تندیس زرین برند محبوب مصرف‌کنندگان 1401</figcaption>
                                </Link>
                            </figure>
                        </ul>
                    </div>
                    <div className="col-md-3 pe-3">
                        <ul className="footer3list lastlist">
                            <li><Link to="#">درباره خانومی</Link></li>
                            <li><Link to="#">ارتباط با ما</Link></li>
                            <li><Link to="#">فرصت های شغلی</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="footerdiv4">
            <div className="container">

                <h1 className="slogan mt-3 text-center text-gray" id="h1Header" style={{fontSize:'24px', fontWeight:'700'}}>خانومی، فروشگاه اینترنتی <Link to="/" target="_blank">لوازم آرایشی</Link> بهداشتی اصل</h1><br/>
                <div className="">
                    <h5 style={{fontWeight:'700'}}><Link href="/" className="text-gray">فروشگاه اینترنتی خانومی</Link>،<Link className="text-gray" to="/">خرید اینترنتی</Link>&nbsp;<span className="text-gray">آسان و مطمئن با بهترین قیمت</span></h5>
                    <p>
                    فروشگاه اینترنتی خانومی با عرضه بهترین مارک های لوازم آرایشی بهداشتی، عطر و ادکلن اصل ،امکان خرید اینترنتی از مجموعه کاملی از کالاهای مورد نیاز یک بانوی شیک پوش و مشکل پسند ایرانی را فراهم آورده است.فروشگاه اینترنتی خانومی نمایندگی رسمی تمامی برندهای آرایشی و بهداشتی را داراست و شما در فروشگاه اینترنتی خانومی به آسانی به مجموعه کاملی از برندهای آرایشی و بهداشتی دسترسی خواهید داشت. با خرید آنلاین از فروشگاه اینترنتی خانومی با ارائه توضیحات کارشناسی شده و دقیق درباره ویژگی های هر کالا در وب سایت، مشاوره و راهنمای خرید، تضمین اصالت کالا و بهترین قیمت در فروشگاه اینترنتی خانومی، این امکان فراهم آمده است به راحتی و با یکخرید اینترنتی لذت بخش، مطمئن و آسان کالای مورد نظر خود را تهیه کرده و به سرعت در سراسر ایران دریافت نمایید و با استفاده از بهترین های لوازم آرایشی بهداشتی از زیبایی خود لذت ببرید.
                    </p>
                    <h5 className="text-gray" style={{fontWeight:'700'}}>شعار&nbsp;<Link to="/" className="text-gray">خانومی</Link><span className="text-gray">: زیبا و سرزنده باش به خاطر خودت</span></h5>
                    <p>فروشگاه اینترنتی خانومی  فعالیت خود را در سال 1392 آغاز کرده است و با فروش اینترنتی مجموعه کاملی از بهترین های لوازم آرایشی بهداشتی شامل بهترین مارک های لوازم آرایشی، بهترین مارک های کرم پودر و پنکک، کانسیلر و رژ گونه، انواع  ریمل و خط چشم، بهترین مارک های رژ لب و خط لب، محصولات آرایش بدن و تاتو، هم چنین بهترین مارک های محصولات مراقبت پوست شامل انواع کرم مرطوب کننده و آبرسان، کرم ضد آفتاب، ضد لک و روشن کننده، ضد چروک، لیفت و سفت کننده و انواع ماسک، محصولات مراقبت دور چشم شامل بهترین مارک های کرم ضد پف و تیرگی دور چشم، ضد چروک و مرطوب کننده، محصولات مراقبت مو شامل مجموعه کاملی از بهترین برندهای شامپو، نرم کننده و حالت دهنده، ماسک، اسپری، سرم و تونیک مو، و همچنین مجموعه بی نظیری از عطر و ادکلن زنانه و مردانه اصل امکان خرید اینترنتی را فراهم می آورد تا به سهولت، کالاهای مورد نظر خود را از بهترین برندهای لوازم آرایشی بهداشتی شامل لورال، میبلین، گارنیر، بورژوا، اسنس، آرت دکو، بیو، بیودرما، نوروا، ویشی، لیراک و ده ها برند مطرح دنیا تهیه نموده و با اطمینان از اصالت کالا و بهترین قیمت، از  خرید اینترنتی خود لذت ببرید.
                    <br/>لازم به تاکید است کلیه واردکنندگان و تولیدکنندگان کالاهای عرضه شده در فروشگاه خانومی موظف به ارائه پروانه بهداشتی ورود یا ساخت از وزارت بهداشت و نصب آن روی کالاهای ارائه شده می باشند و درصورتی که کالا بدون پروانه بهداشت برای شما ارسال گردید فورا واحد پشتیبانی مشتریان خانومی به شماره 02112345000 را در جریان قراردهید تا اقدامات لازم برای تعویض محصول را انجام دهند.
                    </p>


                </div>

            </div>
        </div>

        <div className="footerdiv5 ">
            <div className="container">
                <div className="row">
                    <p style={{color:"#fff"}} className="m-0">کلیه حقوق این سایت متعلق به فروشگاه آنلاین خانومی می باشد.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
