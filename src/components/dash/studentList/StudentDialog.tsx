import {
  ActionIcon,
  Button,
  Center,
  Modal,
  Paper,
  Space,
  Table,
  Title,
} from '@mantine/core'
import { IconClick, IconPencil } from '@tabler/icons'
import { useState } from 'react'

import { StudentData } from '~/services/sb'

type Props = {
  student: StudentData
}

function StudentDialog({ student }: Props) {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <ActionIcon onClick={() => setOpened(true)}>
        <IconClick />{' '}
      </ActionIcon>
      <Modal
        opened={opened}
        onClose={() => setOpened(!opened)}
        closeOnClickOutside
      >
        <Paper>
          <Title order={2}>{student.name}</Title>
          <Table>
            <tr>
              <td>App Submitted</td>
              <td>{student.app_submitted.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>App Status</td>
              <td>{student.app_approved}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>Meeting Scheduled?</td>
              <td>{student.mtg_sched.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>Meeting Done?</td>
              <td>{student.mtg_done.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>Program Chosen?</td>
              <td>{student.pgm_chosen}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>Program Approved?</td>
              <td>{student.pgm_approved.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>App Status Sent?</td>
              <td>{student.app_status_sent.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
            <tr>
              <td>Program Status Sent?</td>
              <td>{student.pgm_status_sent.toString()}</td>
              <td>
                <ActionIcon>
                  <IconPencil />
                </ActionIcon>
              </td>
            </tr>
          </Table>
          <Space h={16} />
          <Center>
            <Button
              variant="filled"
              color="dark"
              onClick={() => setOpened(false)}
            >
              Submit
            </Button>
          </Center>
        </Paper>
      </Modal>
    </>
  )
}

export default StudentDialog
