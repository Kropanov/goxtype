import { API_ROUTES, KEY } from '../../constants/Constants';
import { parseToken } from '../../func';
import useHttp from '../Http/Http';

interface UserData {
    data: {
        email: string;
        password: string;
        name: string;
        // colorMode: ColorMode;
        image: string;
    };
}

export default function useUserData() {
    const { request } = useHttp();

    const LoadUserDataToClient = async (token: string) => {
        const user = await GetUserData(token);
        SaveUserData(user);
    };

    const GetUserData = async (token: string) => {
        const options = { method: 'GET' };
        const payload = parseToken(token);
        return await request(API_ROUTES.USERS + payload.id, options);
    };

    const SaveUserData = (user: UserData) => {
        localStorage.setItem(KEY.IMAGE, user.data.image);
        localStorage.setItem(KEY.NAME, user.data.name ?? 'player-123');
    };

    return { LoadUserDataToClient };
}
