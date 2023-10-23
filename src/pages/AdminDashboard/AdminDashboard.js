import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import OrderList from "../../components/OrderList/OrderList";
import MakeAdmin from "../../components/MakeAdmin/MakeAdmin";
import AddProduct from "../../components/AddProduct/AddProduct";
import Products from "../../components/ManageProducts/ManageProducts";
const drawerWidth = 240;

const AdminDashBoard = (props) => {
  //   const { url } = useMatch();
  const { window } = props;
  const { admin } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <List>
        <NavLink
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/home"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="text-muted" sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#6c6c6c" }} primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/admin/orderList"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="text-muted" sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#6c6c6c" }} primary="Order List" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/admin/addProduct"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="text-muted" sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#6c6c6c" }} primary="Add Product" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/admin/makeAdmin"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="text-muted" sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#6c6c6c" }} primary="Make Admin" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to="/admin/manageProducts"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="text-muted" sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#6c6c6c" }} primary="Manage Products" />
          </ListItem>
        </NavLink>
      </List>
      <Outlet />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ background: "#33415c" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="d-block mx-auto fs-4"
            noWrap
            component="div"
          >
            Admin
          </Typography>
        </Toolbar>

        <div
          style={{ height: "100vh", overflowY: "scroll" }}
          className="bg-light "
        >
          {admin && (
            <Routes>
              <Route path="manageProducts" element={<Products />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="" element={<OrderList />} />
              <Route path="orderList" element={<OrderList />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
            </Routes>
          )}
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "& .css-10hburv-MuiTypography-root": {
              color: "#6c757d",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "& .css-10hburv-MuiTypography-root": {
              color: "#6c757d",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

AdminDashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminDashBoard;
