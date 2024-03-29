function Reservation(){

    return (
        <>
        <header>
    <div class="sign">
        <span><a href="#">로그인</a></span>
        <span>|</span>
        <span><a href="#">회원가입</a></span>
    </div>
    <div class="mainLogo"><a href="/">메디톡톡</a></div>
    <nav class="headerNav">
        <ul>
            <li><a href="#">증상 검색</a></li>
            <li><a href="#">질병 정보</a></li>
            <li><a href="#">병원 예약</a></li>
            <li><a href="#">마이페이지</a></li>
        </ul>
    </nav>
</header>
<section class="contents">



    <table width="99%"  height="100%">
        <tr>
            <td>
                <div class="selection2">
                    <div><a href="#">좌표 지정</a></div>
                    <div><a href="#">지역 선택</a></div>
                </div>
                <br/><br/>
            </td>

            <td></td>

            <td rowspan="2" width="45%" height="100%">

                    <table class="b">

                        <tr>
                            <td height="14%">
                                <table>
                                    <div class="hospital-list">
                                        <div class="hs">병원목록</div>
                                        <div><a href="#">가나다순/거리순</a></div>
                                    </div>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td height="74%">
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

                        <tr>
                            <td height="12%">
                                <div class="hospital-list2">
                                    <input class="c" id="doc-name" name="doc-name" type="text" placeholder="병원검색"/>
                                </div>
                            </td>
                        </tr>

                    </table>

            </td>
        </tr>

        <tr>

            <td width="45%" >
                <table class="b">

                </table>
            </td>

            <td width="10%" >
                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                

                <table height="80" width="50%">
                    <tr>
                        <td class="edge" align="center">+</td>
                    </tr>
                    <tr>
                        <td class="edge" align="center">-</td>
                    </tr>
                </table>
                <br/>
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

export default Reservation;