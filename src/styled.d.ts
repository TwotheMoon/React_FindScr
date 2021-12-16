import "styled-components";

declare global {
    interface Window {
        kakao: string;
    }
}

// styled-components 테마 정의
declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        scrTextColor: string;
        bgColor: string;
        accentColor: string;
    }
}