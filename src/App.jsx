//1. 왼쪽 연락처 추가 오른쪽 연락처 리스트 및 검색
//2. 리스트에 이름과 번호 추가
//3. 리스트에 연락처 갯수 표시
//4. 이름으로 검색 가능

import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Container>
        <CssBaseline />
        <Typography
          variant={isMobile ? "h4" : "h1"}
          align="center"
          gutterBottom
        >
          Contact List
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <ContactForm />
          </Grid>
          {isMobile ? (
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>
          ) : (
            <Divider orientation="vertical" flexItem />
          )}
          <Grid item xs={12} md={7} sx={{ ml: isMobile ? 0 : 1 }}>
            <ContactList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
