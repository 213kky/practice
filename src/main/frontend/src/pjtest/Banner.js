import { Link } from "react-router-dom";
import AdminView from "./adminview";
function Banner() {
    return (
        <>
            <header>
                <div class="sign">
                    <span><a href="#">로그인</a></span>
                    <span>|</span>
                    <span><a href="#">회원가입</a></span>
                </div>
                <div class="mainLogo"><Link to="/">메디톡톡</Link></div>
                <nav class="headerNav">
                    <ul>
                        <li><a href="#">증상 검색</a></li>
                        <li><a href="#">질병 정보</a></li>
                        <li><a href="/reservation">병원 예약</a></li>
                        <li><a href="#">마이페이지</a></li>
                    </ul>
                </nav>
            </header>
            <section class="contents">


                <div class="selection">
                    <div><a href="#">좌표 지정</a></div>
                    <div><a href="#">지역 선택</a></div>
                </div>

                <br/>
                    <br/>


                        <table width="99%" height="100%">
                            <tr>

                                <td width="45%">
                                    <table class="b">
                                        <tr>
                                            <td>
                                                <div class="twobox2">
                                                    <table class="edge sss tt" width="25%" height="90%">
                                                        <tr>
                                                            <td><a href="#">서울</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">서울</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">경기</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">강원</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">대전</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">부산</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">울산</a></td>
                                                        </tr>

                                                    </table>

                                                    <table class="edge sss tt" width="65%" height="90%">
                                                        <tr>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                            <td>
                                                                <td><a href="#">asd</a></td>
                                                            </td>
                                                        </tr>

                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                                <td width="10%" >

                                </td>



                                <td width="45%">
                                    <table class="aaa">

                                        <tr>
                                            <td height="20%">
                                                <table>
                                                    <div class="hospital-list">
                                                        <div class="hs">병원목록</div>
                                                        <div><a href="#">가나다순/거리순</a></div>
                                                    </div>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td height="80%">
                                                <table width="95%" height="100%" align="center">
                                                    <tr>
                                                        <td class="edge">OO병원<br/>주소</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="edge">OO병원<br/>주소</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="edge">OO병원<br/>주소</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="edge">OO병원<br/>주소</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                    </table>
                                </td>
                            </tr>
                        </table>


                    </section>
                    <aside>
                        <div class="quickHospital">
                            자주 찾는 병원
                            <ul>
                                <span>로그인이 필요한 서비스입니다.</span>
                                <li><a href="#">OOO 병원</a></li>
                                <li><a href="#">OOO 병원</a></li>
                                <li><a href="#">OOO 병원</a></li>
                            </ul>
                        </div>
                        <div class="quickDisease">
                            자주 찾는 질병
                            <ul>
                                <span>로그인이 필요한 서비스입니다.</span>
                                <li><a href="#">A 질병</a></li>
                                <li><a href="#">B 질병</a></li>
                                <li><a href="#">C 질병</a></li>
                            </ul>
                        </div>
                    </aside>
                    
                </>
                )
}

                export default Banner;