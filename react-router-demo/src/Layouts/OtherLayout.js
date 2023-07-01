import { Outlet } from 'react-router-dom';
function OtherLayout() {
  return (
    <>
      <h2>This is a shared layout for About and Contact</h2>
      <Outlet />
    </>
  );
}

export default OtherLayout;
