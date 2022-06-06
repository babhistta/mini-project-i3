import { createTheme } from '@mui/material/styles';

export const styles = createTheme({
  shadowBasic: {
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  cardTaskParent: {
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
    padding: ' 1.5em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    marginBottom: '1.5em',
  },
  cardTask: {
    boxShadow: 'none',
    marginTop: '16px',
    padding: ' 1em 1.5em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: '#F0F1F3',
  },
  titlePage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customButton: {
    borderRadius: '10px',
    textTransform: 'none',
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  circleIconButton: {
    borderRadius: '50%',
    marginLeft: '0.5em',
    padding: '11.4px ',
    minWidth: '38px',
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  paperBg: {
    background: '#111',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
    p: 7,
  },

  formLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 400,
    bgcolor: '#fff',
    borderRadius: 3,
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
    p: 7,
  },
  bgLogin: {
    p: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '97vh',
    bgcolor: '#EFEFF5',
  },

  popUpSetting: {
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
    p: 7,
  },
});
