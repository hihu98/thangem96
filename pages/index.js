import { useState } from 'react'

import Head from 'next/head'

export default function Home() {
    const [form, setForm] = useState({
        job: 'IT',
        selfStudy: 'học code',
        currentJob: 'remote cho công ty Mỹ',
        sideJob: 'nhận các project bên ngoài làm thêm',
        jobVerb: 'làm IT',
    })
    const [copied, setCopied] = useState(false)

    const { job, selfStudy, currentJob, sideJob, jobVerb } = form

    const renderInput = (v, t) => {
        return (
            <div className="mt-2 flex flex-wrap w-full md:w-1/2 md:px-2">
                <label className="w-full font-bold mb-2" htmlFor={v}>
                    {t}
                </label>
                <input
                    id={v}
                    className="w-full py-2 px-5 border border-gray-300 focus:border-blue-500 rounded"
                    onChange={e =>
                        setForm(f => ({ ...f, [v]: e.target.value }))
                    }
                    value={form[v]}
                    autoCapitalize="none"
                    placeholder={t}
                />
            </div>
        )
    }

    const text = `Ngành ${job} Việt Nam hiện nay ở đầu của sự phát triển. Có thể nói ${job} là vua của các nghề. Vừa có tiền, có quyền. Vừa kiếm được nhiều $ lại được xã hội trọng vọng.
  Thằng em mình học bách khoa cơ khí, sinh năm 96. Tự mày mò ${selfStudy} rồi đi làm ${currentJob}. Mỗi tối online 3-4 giờ là xong việc. Lương tháng 3k6. Nhưng thu nhập chính vẫn là từ ${sideJob}. Tuần làm 2,3 cái nhẹ nhàng 9,10k tiền tươi thóc thật không phải đóng thuế. Làm gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm.
  Gái gú thì cứ nghe nó bảo làm CNTT thì chảy nước. Có bé kia dân du học sinh Úc, về được cô chị giới thiệu làm ngân hàng VCB. Thế nào thằng ấy đi mở thẻ tín dụng gặp phải thế là hốt được cả chị lẫn em. 3 đứa nó sống chung một căn hộ cao cấp. Nhà con bé vừa giàu vừa gia giáo (cha là tiến sĩ giảng viên đại học, mẹ nó à phó chánh án) biết chuyện ban đầu phản đối sau biết thằng đấy ${jobVerb} thì đổi thái độ, cách ba bữa hỏi thăm, năm bữa tặng quà cho ba mẹ nó giục cưới kẻo lỡ kèo. Định tháng này cưới con chị và tiêp tục sống với con em nhưng dính dịch dời đám cưới lại rồi.`

    const clickCopy = () => {
        if (navigator?.clipboard) navigator.clipboard.writeText(text)
        else if (window?.navigator?.clipboard)
            window.navigator.clipboard.writeText(text)
        else return

        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
    }

    return (
        <>
            <Head>
                <title>Thằng em 96</title>
                <meta
                    name="description"
                    content="BÁCH KHOA CƠ KHÍ BỎ NGANG SANG IT"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                    rel="stylesheet"></link>
                <meta
                    property="og:image"
                    content="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/05/1586311834872.png"
                />
                <meta
                    property="og:description"
                    content="BÁCH KHOA CƠ KHÍ BỎ NGANG SANG IT"
                />
                <meta property="og:title" content="thang em 96"></meta>
            </Head>

            <main className="px-4 md:px-64 min-h-screen py-12">
                <p>
                    Ngành <span className="text-blue-500">{job}</span> Việt Nam
                    hiện nay ở đầu của sự phát triển. Có thể nói{' '}
                    <span className="text-blue-500">{job}</span> là vua của các
                    nghề. Vừa có tiền, có quyền. Vừa kiếm được nhiều $ lại được
                    xã hội trọng vọng. <br />
                    Thằng em mình học bách khoa cơ khí, sinh năm 96. Tự mày mò{' '}
                    <span className="text-blue-500">{selfStudy}</span> rồi đi
                    làm <span className="text-blue-500">{currentJob}</span>. Mỗi
                    tối online 3-4 giờ là xong việc. Lương tháng 3k6. Nhưng thu
                    nhập chính vẫn là từ{' '}
                    <span className="text-blue-500">{sideJob}</span>. Tuần làm
                    2,3 cái nhẹ nhàng 9,10k tiền tươi thóc thật không phải đóng
                    thuế. Làm gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà
                    thèm.
                    <br />
                    Gái gú thì cứ nghe nó bảo làm CNTT thì chảy nước. Có bé kia
                    dân du học sinh Úc, về được cô chị giới thiệu làm ngân hàng
                    VCB. Thế nào thằng ấy đi mở thẻ tín dụng gặp phải thế là hốt
                    được cả chị lẫn em. 3 đứa nó sống chung một căn hộ cao cấp.
                    Nhà con bé vừa giàu vừa gia giáo (cha là tiến sĩ giảng viên
                    đại học, mẹ nó à phó chánh án) biết chuyện ban đầu phản đối
                    sau biết thằng đấy{' '}
                    <span className="text-blue-500">{jobVerb}</span> thì đổi
                    thái độ, cách ba bữa hỏi thăm, năm bữa tặng quà cho ba mẹ nó
                    giục cưới kẻo lỡ kèo. Định tháng này cưới con chị và tiêp
                    tục sống với con em nhưng dính dịch dời đám cưới lại rồi.
                </p>
                <button
                    className="px-3 py-2 my-2 rounded bg-blue-500 text-white"
                    onClick={clickCopy}>
                    COPY VĂN MẪU
                </button>
                {copied ? (
                    <div className="my-2 text-pink-500 italic text-xs">
                        Đã copy !
                    </div>
                ) : null}

                <div className="mt-4">
                    <div className="my-2 text-gray-700">Điền văn mẫu</div>
                    <div className="flex flex-wrap">
                        {renderInput('job', 'IT')}
                        {renderInput('selfStudy', 'học code')}
                        {renderInput('currentJob', 'remote cho công ty Mỹ')}
                        {renderInput(
                            'sideJob',
                            'nhận các project bên ngoài làm thêm'
                        )}
                        {renderInput('jobVerb', 'làm IT')}
                    </div>
                </div>
            </main>

            <footer className="flex justify-center items-center border-t py-4">
                <span>vanmau by hihu</span>
            </footer>
        </>
    )
}
