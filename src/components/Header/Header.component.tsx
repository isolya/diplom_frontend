import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const linkStyle = {
  textDecoration: "none",
};
const MenuStyle = {
  textDecoration: "none",
  color: "white",
  paddingRight: "50px",
  fontSize: "bold",
  fontWeight: "bold"
}
const Header = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'black' }}>
      <Toolbar>
        <Link to="/" style={linkStyle}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "bold",
              padding: "10px",
              margin: "10px 100px 10px 20px",
              fontWeight: "bold",
              position: "relative",
              border: "5px solid #E98074",
              borderRadius: "15px",
              color: "#ffffff"
            }}>
            EazyLearning.
          </Typography>
        </Link>
        <Box>
          <Link to="/" style={MenuStyle}>Курсы</Link>
          <Link to="/reviews" style={MenuStyle}>Отзывы</Link>
          <Link to="/questions" style={MenuStyle}>Вопросы</Link>
          <Link to="/choosing-computer" style={MenuStyle}> Компьютер для занятий</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;