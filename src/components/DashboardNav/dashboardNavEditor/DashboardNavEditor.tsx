/* DashboardNavEditor 컴포넌트

TODO - member type을 만들고 members 인자를 any에서 member[] 타입으로 바꿔줄 것.
TODO - 나중에 시간 되면 멤버 사진 누르면 멤버 리스트가 드롭다운으로 나오는 기능 구현할 것.
- DashboardNav 바 컴포넌트의 왼쪽에 들어갈 관리 버튼, 초대하기 버튼, 멤버이미지
- 불린형 인자 isOwner 받고 true라면 내가 만든 대시보드 페이지에 있는 것으로 해석해 관리 버튼을 렌더링
- 숫자형 인자 boardId 받고 관리 버튼을 누를 시 해당 id의 edit page로 이동하게 함
- members 배열이 담긴 members 인자를 받고 멤버 프로필을 렌더링
 */

import Image from 'next/image'
import Link from 'next/link'
import styles from './DashboardNavEditor.module.scss'
import MemberType from '@/types/MemberType'

export default function DashboardNavEditor({
  isOwner = false,
  boardId = 1,
  members = null,
}: {
  isOwner?: boolean
  boardId?: number
  members?: { members: MemberType[]; totalCount: number } | null
}) {
  // 데스크톱 화면에선 member가 5명 이상이면 4개만 표시하고 나머지는 +1
  // 타블렛, 모바일 화면에선 member가 3명 이상이면 2개만 표시하고 나머지는 +1

  return (
    <div className={styles['editor-section']}>
      <div className={styles['button-section']}>
        {isOwner && (
          <Link href={`/dashboard/${String(boardId)}/edit`}>
            <button className={styles['button']}>
              <Image src="assets/settingIcon.svg" alt="setting icon" width={20} height={20} />
              관리
            </button>
          </Link>
        )}
        <button className={styles['button']}>
          <Image src="assets/addIcon.svg" alt="add icon" width={20} height={20} />
          초대하기
        </button>
      </div>
      {members && (
        <div className={styles['members-section']}>
          {members.members.map((member) => {
            return (
              <div className={styles['member-img-list']} key={member.id}>
                <Image
                  src={member.profileImageUrl}
                  alt="profile"
                  width={36}
                  height={36}
                  className={styles['member-img']}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
