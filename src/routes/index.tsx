import { useRoutes } from 'react-router-dom';

import { PVEMode } from '@/features/pve'
import { HomePage} from '@/features/homePage/'
// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';
// import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

export const AppRoutes = () => {
    // const auth = useAuth();

    const pve = [{ path: '/pve', element: <PVEMode /> }];
    const home = [{ path: '/', element: <HomePage /> }];

    // const routes = auth.user ? protectedRoutes : publicRoutes;

    const element = useRoutes([...pve, ...home]);

    return <>{element}</>;
};
