import type { SvgIconProps } from '@mui/material/SvgIcon';
import { colors } from "./variaveis"

interface StyledIconProps extends SvgIconProps {
  icon: React.ElementType; // Tipo para qualquer componente de ícone
}


const Icon: React.FC<StyledIconProps> = ({ icon: IconComponent, sx, ...props }) => {
  return <IconComponent sx={{
        fontSize: 60,
          color: colors.background,
            cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 8px 16px `
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 2px',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: `0 4px 8px`,
        },
        }}
         {...props} />;
};

export default Icon
