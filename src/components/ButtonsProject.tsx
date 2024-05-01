import IconButton from './basic/IconButton';
import { useThemeAfterRender } from '../hooks/themeAfterRender';
import { useEffect } from 'react';

interface Props {
  gitHubUrl?: string
  viewUrl?: string
}

const ButtonsProject = ({ gitHubUrl, viewUrl }: Props) => {
  const theme = useThemeAfterRender();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="flex gap-4">
      {
        gitHubUrl ? (
          <IconButton
            typeElement="a"
            icon="iconportafoliojp-github-1"
            target="_blank"
            href={gitHubUrl}
            bgColor={theme === 'light' ? 'primary' : 'white'}
          />
        ) : null
      }
      {
        viewUrl ? (
          <IconButton
            typeElement="a"
            icon="iconportafoliojp-link"
            target="_blank"
            href={viewUrl}
            bgColor={theme === 'light' ? 'primary' : 'white'}
          />
        ) : null
      }
    </div>
  )
};

export default ButtonsProject;
