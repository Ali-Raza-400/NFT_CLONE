import React from 'react'
import { SiEthereum } from 'react-icons/si'
import pic1 from '../../assets/pic5.png'
import pic2 from '../../assets/pic6.png'
import pic3 from '../../assets/pic3.png'

function Footer() {
    return (
        <div>

            <footer className=" ml-36 ">
                <div className="grid grid-cols-2 gap-0 py-8 px-0 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm  text-gray-900 uppercase font-bold">Menu</h2>
                        <ul className="">
                            <li className="mb-2">
                                <a href="#" className=" hover:underline">Marketplace</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">My account</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Al drawing tools</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">NFT printing Service</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">About us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">F.A.Q</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Social</h2>
                        <ul className="">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Discord</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Instagram
                                </a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Legal</h2>
                        <ul className="">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Privacy and Policy</a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Download</h2>
                        <ul className="">
                            <li className=' flex space-x-4 '>

                                {/* <a href=""><img src={pic1} alt="" /> <img src={pic2} alt="" /><img src={pic3} alt="" />  </a>  */}
                                <span><img src={pic1} alt="" /></span><span><img src={pic2} alt="" /></span><span><img src={pic3} alt="" /></span>





                            </li>

                        </ul>
                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Footer