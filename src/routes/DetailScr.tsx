import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    max-width: 480px;
    padding: 0px 20px;
    margin: 0 auto;
    color: white;
    `;
const MapContainer = styled.div`
        max-width: 480px;
        height: 600px;
    `;
const Backword = styled.span`
    font-size: 30px;
    `;

interface RouteParams {
    scrCode: string;
}
interface IRouteState {
    addr: string,       //주유소 주소
    code: string,       //주유소 코드
    inventory: string,  //재고량
    lat: string,        //주유소 위도
    lng: string,        //주유소 경도
    name: string,       //주유소 이름
    openTime: string,   //영업시간
    price: string,      //요소수 가격
    regDt: string,      //업데이트 일시
    tel: string,        //주유소 전화번호
}

// 카카오맵 API

function DetailScr() {
    const { scrCode } = useParams<RouteParams>();
    const { state } = useLocation<IRouteState>();

    const { kakao } = window;
    function KakaoMapScript() {
        const container = document.getElementById('myMap');
        // 카카오맵, 해당 주유소 위치
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = state.lat;
                let lng = state.lng;
                if (lat === "0E-8") {
                    alert("해당 주유소는 위치정보가 등록되지 않았어요");
                };

                const options = {
                    center: new kakao.maps.LatLng(lat, lng),
                    level: 3
                }
                const map = new kakao.maps.Map(container, options);

                let markerPosition = new kakao.maps.LatLng(lat, lng);

                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                    title: "현재 위치"
                });

                marker.setMap(map);
                // 주유소 마커 클릭시 정보 표시
                let iwContent = `
                <div style="padding:5px; width:350px; color:black;">
                ${state.name} <br>
                 재고: ${state.inventory}L
                <br>
                <a href="https://map.kakao.com/link/map/${state.name},${state.lat},${state.lng}" style="color:blue" target="_blank">큰지도보기</a> 
                <a href="https://map.kakao.com/link/to/${state.name},${state.lat},${state.lng}" style="color:blue" target="_blank">길찾기</a></div>'
                </div>`,
                    iwRemoveable = true;

                let infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable
                });
                kakao.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);

                });
            }
            );
        }
    };
    useEffect(() => {
        KakaoMapScript();
    }, [KakaoMapScript]);

    return (
        <>
            <Container>
                <MapContainer>
                    <div id='myMap' style={{
                        width: '480px',
                        height: '600px'
                    }}>
                    </div>
                </MapContainer>
                <Backword>
                    <Link to={`/`}>
                        <h1>&larr;</h1>
                    </Link>
                </Backword>
                {state.name}
                {state.addr}
                {state.inventory}
            </Container>
        </>
    );
}

export default DetailScr;