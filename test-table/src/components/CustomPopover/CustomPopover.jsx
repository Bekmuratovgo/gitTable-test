import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import style from './CustomPopover.module.css';


function CustomPopover({ modal, children  }) {
  const placement = 'top';

  return (
    <OverlayTrigger
      rootClose={true}
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Body className={style.popover_modal}>
            { modal }
          </Popover.Body>
        </Popover>
      }
    >
      <Button className={style.popover} >
        { children }
      </Button>
    </OverlayTrigger>
  );
}
export default CustomPopover;