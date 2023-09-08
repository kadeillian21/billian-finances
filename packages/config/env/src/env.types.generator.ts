import * as dotenv from 'dotenv'

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const generateInterface = (parsed:Record<string,string>) => {
  const keys = Object.keys(parsed).sort()
  process.stderr.write('export const BillianRuntimeConfigSchema = z.object({\n')
  keys.map((k) => {
    process.stderr.write(`  ${k}: z.string().min(1),\n`)
    return null
  })
  process.stderr.write('})\n\n')
  process.stderr.write(`export type BillianRuntimeConfig = z.infer<typeof BillianRuntimeConfigSchema>\n\n`)
}

const generateEnvironment = (parsed:Record<string,string>) => {
  process.stderr.write('export const getRuntimeConfig = (cfg: BillianRuntimeConfig): BillianRuntimeConfig => ({\n')
  // process.stderr.write('  return {\n');
  Object.keys(parsed).sort().map((k) => {
    // const v = parsed[k]
    // isNaN(v) ? (v === 'true' || v === 'false' ? ` ? process.env.${k} === 'true' : undefined` : ``) : `? Number(process.env.${k}) : undefined`
    process.stderr.write(`  ${k}: cfg.${k},\n`)
    return null
  })
  // process.stderr.write('  };\n');
  process.stderr.write('})\n')
}

process.stderr.write('/*\n * Do Not Manually Modify\n * Generated with env.types.generator.ts\n */\n\n')
process.stderr.write(`import {z} from 'zod'\n\n`)
generateInterface(result.parsed as Record<string,string>)
generateEnvironment(result.parsed as Record<string,string>)
