import * as S from './EditIcons.styled';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import rejectionIcon from '../../assets/rejection.svg';

function EditIcons({ hasAnswer, isRejected }) {
  return (
    <S.WrapEditIcons>
      {hasAnswer ? (
        <>
          {!isRejected && (
            <S.EditIconButton>
              <img src={editIcon} alt="Edit" />
            </S.EditIconButton>
          )}
        </>
      ) : (
        <S.EditIconButton>
          <img src={rejectionIcon} alt="Rejection" />
        </S.EditIconButton>
      )}

      <S.EditIconButton>
        <img src={deleteIcon} alt="Delete" />
      </S.EditIconButton>
    </S.WrapEditIcons>
  );
}

export default EditIcons;
