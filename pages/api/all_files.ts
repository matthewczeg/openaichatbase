import fs from 'fs'
import path from 'path'

const handler = async (_req: Request, res: Response) => {
    const filePath = path.join(process.cwd(), 'all_files.txt')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    res.status(200).send(fileContent)
}

export default handler