import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route('register-page', './routes/register-page/name.tsx' ),
    route('register-page', './routes/register-page/index.tsx' ),
    route('register-page', './routes/register-page/email.tsx' ),
    route('register-page', './routes/register-page/phone.tsx' ),
    route('register-page', './routes/register-page/password.tsx' ),
    route('register-page', './routes/register-page/confirmPass.tsx' ),
    route('dataPage', './routes/dataPage/data.tsx'),
    route('aside', './routes/aside/aside.tsx'),
     route('airtimePage', './routes/airtimePage/airtime.tsx'),
      route('nepabill', './routes/nepabill/bill.tsx'),
       route('tvsub', './routes/tvsub/tv.tsx'),
         route('wallet', './routes/wallet/wallet.tsx'),
             route('pinChange', './routes/pinChange/pin.tsx'),
               route('account', './routes/account/account.tsx'),
               route('resultChecker', './routes/resultChecker/result.tsx'),
               route('rechargeCard', './routes/rechargeCard/cardPrinting.tsx'),
               route('loginPage', './routes/loginPage/login.tsx'),
               route('signupage', './routes/signupage/signup.tsx'),
               route('pricingpage', './routes/pricingpage/pricing.tsx')


] satisfies RouteConfig;
