import { Button, ScrollArea, Skeleton, Table } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import StudentRow from './StudentRow'

import { StudentData, getAllStudents } from '~/services/sb'

function StudentList() {
  const { data, status } = useQuery(['prefetchStudents'], getAllStudents)
  if (status === 'loading') {
    return (
      <div>
        <Skeleton key="1" height={50} />
        <Skeleton key="2" height={50} />
        <Skeleton key="3" height={50} />
        <Skeleton key="4" height={50} />
        <Skeleton key="5" height={50} />
        <Skeleton key="6" height={50} />
        <Skeleton key="7" height={50} />
        <Skeleton key="8" height={50} />
        <Skeleton key="9" height={50} />
        <Skeleton key="10" height={50} />
      </div>
    )
  }
  if (status === 'error') {
    return <div>Error</div>
  }

  return (
    <div>
      <ScrollArea>
        <Table
          sx={{
            border: '1px solid #eaeaea',
          }}
        >
          <thead>
            <tr>
              <th>student.name</th>
              <th>app_submitted</th>
              <th>app_approved</th>
              <th>mtg_sched</th>
              <th>mtg_done</th>
              <th>pgm_chosen</th>
              <th>pgm_approved</th>
              <th>app_status_sent</th>
              <th>pgm_status_sent</th>
            </tr>
          </thead>
          <tbody>
            {data[0].name &&
              data.map((oneStudent: StudentData) => (
                <StudentRow key={oneStudent.name} student={oneStudent} />
              ))}
          </tbody>
        </Table>
      </ScrollArea>
      <Button> Do Action</Button>
    </div>
  )
}

export default StudentList
