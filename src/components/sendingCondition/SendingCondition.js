import React from 'react'
import "./sendingCondition.css"

const SendingCondition = () => {
  return (
    <section className="sending-condition">
        <div className="row">
            <div className="col-md-12">
                <div className="sending-condition-maindiv d-flex mx-auto">

                    <div className="col-md-3 col-sm-12 mx-2">
                        <img src="https://www.khanoumi.com/Scripts/UI/css/ThemeFiles/images/Diamond.svg" alt="" />
                        <div className="sending-condition-info">
                            <p className="toptitle-condision">نماد اعتماد</p>
                            <p className="">پرداخت امن</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12 mx-2">
                        <img src="https://www.khanoumi.com/Scripts/UI/css/ThemeFiles/images/Wallet.svg" alt="" />
                        <div className="sending-condition-info">
                            <p className="toptitle-condision">نحوه پرداخت</p>
                            <p className="">تمامی کارت های عضو شتاب</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12 mx-2">
                        <img src="https://www.khanoumi.com/Scripts/UI/images/free-shipping.svg" alt="" />
                        <div className="sending-condition-info">
                            <p className="toptitle-condision">ارسال رایگان</p>
                            <p className="">جزئیات هزینه ارسال</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12 mx-2">
                        <img src="https://www.khanoumi.com/Scripts/UI/css/ThemeFiles/images/7-Day.svg" alt="" />
                        <div className="sending-condition-info">
                            <p className="toptitle-condision">7 روز بازگشت رایگان</p>
                            <p className="">شرایط خدمات پس از فروش</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default SendingCondition
