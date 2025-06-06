import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/modules/CandidatesModule/Homepage/Homepage";
import Login from "./components/login/Login";
import ResetPassword from "./pages/auth/resetPassword/resetPassword";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import ResetSuccess from "./pages/auth/passwordReset/passwordResetSuccess";
import Overview from "./pages/modules/Overview/Overview";
import Myprofile from "./pages/modules/Myprofile/Myprofile";
import Profiledetails from "./pages/modules/Myprofile/Profiledetails";
import Aplliedjobs from "./pages/modules/Appliedjobs/Aplliedjobs";
import Savedjobs from "./pages/modules/Savedjobs/Savedjobs";
import Scheduleinterview from "./pages/modules/Scheduleinterview/Scheduleinterview";
import Setting from "./pages/modules/Settings/Setting";
import Feedback from "./pages/modules/Feedback/Feedback";
import Findjob from "./pages/modules/Findajob/Findjob";
import Findemployee from "./pages/modules/FindEmplyee/Findemployee";
import Jobalerts from "./pages/modules/Jobalerts/Jobalerts";
import Customersupport from "./pages/modules/Customersupports/Customersupport";
import BasicDetails from "./pages/modules/BasicDetails/BasicDetails";
import SingleEmployers from "./pages/modules/FindEmplyee/FindEmployers/SingleEmployers";
import Notification from "./pages/modules/Notification/Notification";
import Emptyprofiles from "./pages/modules/Myprofile/Emptyprofiles";
import GettingStarted from "./pages/modules/BasicDetails/GettingStarted";
import LandingScreen1 from "./pages/modules/LandingScreens/LandingScreen1";
import LandingScreen2 from "./pages/modules/LandingScreens/LandingScreen2";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./components/signUp/SignUp";
import VerifyAccount from "./pages/modules/VerifyAccount/VerifyAccount"
import EmailVerifications from "./pages/modules/EmailVerification/EmailVerifications";
import EmailVerifySuccess from "./pages/modules/EmailVerification/EmailVerifySuccess";
import PhoneVerifications from "./pages/modules/PhoneVerification/PhoneVerifications";
import PhoneVerifySuccess from "./pages/modules/PhoneVerification/PhoneVerifySuccess";
import Applicationdetails from "./pages/modules/ApplicationDetails/Applicationdetails";
import Applicationsubmit from "./pages/modules/ApplicationDetails/Applicationsubmit";
import Findjobdetails from "./pages/modules/Findajob/FindjobDetails/Findjobdetails";
 import Inboxes from "./pages/modules/Inbox/Inboxes";
import SpamBox from "./pages/modules/FindEmplyee/FindEmployers/SpamBox";
// import Chat from "./pages/modules/Settings/Setting/Chat";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Inboxes" element={<Inboxes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/resetSuccess-password" element={<ResetSuccess />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/single-employee" element={<SingleEmployers />} />
        <Route path="/applied-jobs" element={<Aplliedjobs />} />
        <Route path="/saved-jobs" element={<Savedjobs />} />
        <Route path="/scheduled-interview" element={<Scheduleinterview />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/find-job" element={<Findjob />} />
        <Route path="/find-employers" element={<Findemployee />} />
        <Route path="/job-alerts" element={<Jobalerts />} />
        {/* <Route path="/customer-support" element={<Customersupport />} /> */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/my-profile" element={<Myprofile />} />
        <Route path="/dashboard/applied-jobs" element={<Aplliedjobs />} />
        <Route path="/dashboard/saved-jobs" element={<Savedjobs />} />
        <Route path="/basicDetails" element={<BasicDetails />} />
        <Route path="/dashboard/profile-details" element={<Profiledetails />} />
        <Route path='/dashboard/empty-profile' element={<Emptyprofiles />} />
        <Route path="/gettingStarted" element={<GettingStarted />}/>
        <Route path="/landingScreen1" element={<LandingScreen1 />}/>
        <Route path="/landingScreen2" element={<LandingScreen2 />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/verify" element={<VerifyAccount />}/>
        <Route path="/emailVerify" element={<EmailVerifications />}/>
        <Route path="/emailVerifySuccess" element={<EmailVerifySuccess />}/>
        <Route path="/phoneVerify" element={<PhoneVerifications />}/>
        <Route path="/phoneVerifySuccess" element={<PhoneVerifySuccess />}/>
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route
          path="/dashboard/scheduled-interview"
          element={<Scheduleinterview />}
        />
        <Route path="/dashboard/settings" element={<Setting />} />
        <Route path="/dashboard/feedback" element={<Feedback />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/jobdetails" element={<Findjobdetails/>}  />
        <Route path="/application-submitted" element={<Applicationsubmit />} />
        <Route path="/application-details" element={<Applicationdetails />} />
        <Route path="/spam" element={<SpamBox />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
