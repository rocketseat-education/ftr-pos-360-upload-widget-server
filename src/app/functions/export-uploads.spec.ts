import { randomUUID } from 'node:crypto'
import { exportUploads } from '@/app/functions/export-uploads'
import { getUploads } from '@/app/functions/get-uploads'
import { isRight, unwrapEither } from '@/infra/shared/either'
import { makeUpload } from '@/test/factories/make-upload'
import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'

describe('export uploads', () => {
  it('should be able to export uploads', async () => {
    const namePattern = randomUUID()

    const upload1 = await makeUpload({ name: `${namePattern}.wep` })
    const upload2 = await makeUpload({ name: `${namePattern}.wep` })
    const upload3 = await makeUpload({ name: `${namePattern}.wep` })
    const upload4 = await makeUpload({ name: `${namePattern}.wep` })
    const upload5 = await makeUpload({ name: `${namePattern}.wep` })

    const sut = await exportUploads({
      searchQuery: namePattern,
    })
  })
})
