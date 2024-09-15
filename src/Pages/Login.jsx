import CustomPrimaryButton from '../components/CustomPrimaryButton';
import CustomTextField from '../components/customTextField';

function Login() {
    return (
        <div
          style={{
            backgroundColor: '#000',
            backgroundPosition: 'center 30%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="login"
            style={{
              height: '412px',
              width: '412px',
              backgroundColor: '#191A19',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: '36px',
                color: '#FFFFFF',
                padding: '20px 20px  10% 20px',
              }}
            >
              Login
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '0 40px',
              }}
            >
              <CustomTextField
                label="Email"
                name="email"
                additionalProps={{
                  borderRadius: '66px',
                  labelcolor: '#FFFFFF',
                  color: '#FFFFFF',
                }}
              />
              <CustomTextField
                label="Password"
                name="password"
                additionalProps={{
                  borderRadius: '66px',
                  labelcolor: '#FFFFFF',
                  color: '#FFFFFF',
                  type: 'password',
                }}
              />
              <CustomPrimaryButton
                
                style={{
                  color: '#FF7420',
                  backgroundColor:'#FFFFFF',
                  height: '40px',
                  width: '100%',
                  borderRadius: '66px',
                  marginTop: '20px',
                  marginBottom: '-10px',
                }}
              >
                Login
              </CustomPrimaryButton>
              
            </div>
          </div>
          
        </div>
      );
}

export default Login