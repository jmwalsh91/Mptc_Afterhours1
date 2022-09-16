import { Dialog } from '@mantine/core'
import { StudentData } from '~/services/sb'
import StudentDialog from './StudentDialog'

type Props = {
  student: StudentData
}

function StudentRow({ student }: Props) {
  return (
    <tr key={student.name}>
      <td>
        {student.name} <StudentDialog student={student} />{' '}
      </td>
      <td>{student.app_submitted.toString()}</td>
      <td>{student.app_approved}</td>
      <td>{student.mtg_sched.toString()}</td>
      <td>{student.mtg_done.toString()}</td>
      <td>{student.pgm_chosen}</td>
      <td>{student.pgm_approved.toString()}</td>
      <td>{student.app_status_sent.toString()}</td>
      <td>{student.pgm_status_sent.toString()}</td>
    </tr>
  )
}

export default StudentRow
