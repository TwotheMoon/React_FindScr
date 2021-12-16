const BASE_URL = `https://api.odcloud.kr/api/uws/v1/inventory?page=1&perPage=1200&`;
const API_KEY = `serviceKey=iVajbcB%2B7uBB9PieYeyeSvBXJElGL%2B2QZTU1nVnPjt7YvwDQcbIl7nNUIygDzGNAMXdO8nwl8%2BjlxgKtDmmTNQ%3D%3D`;

export function fetchScr() {
    return fetch(`${BASE_URL}${API_KEY}`).then((response) =>
        response.json()
    );
}
