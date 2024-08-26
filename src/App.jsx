//1. 왼쪽 연락처 추가 오른쪽 연락처 리스트 및 검색
//2. 리스트에 이름과 번호 추가
//3. 리스트에 연락처 갯수 표시

import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

//4. 이름으로 검색 가능
function App() {
  return (
    <>
      <Container>
        <CssBaseline />
        <Typography variant="h1" align="center" gutterBottom>
          Contact List
        </Typography>

        <Grid container>
          <Grid item md={4}>
            <ContactForm />
          </Grid>
          <Grid item md={8}>
            <ContactList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
