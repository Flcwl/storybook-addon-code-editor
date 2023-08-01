export function parseFile(fileContent: string) {
  const functionObj: {
    name: string;
    storyName: string;
    description: string;
  } = {
    name: '',
    storyName: '',
    description: '',
  };

  getStoryFunctionName(fileContent, functionObj);

  getStoryName(fileContent, functionObj);

  getFunctionHeaderComment(fileContent, functionObj);

  return functionObj;
}


function getStoryFunctionName(fileContent: string, functionObj: any) {
  let name = ''
  const nameMatch = fileContent.match(new RegExp(/export\s+default\s+([^;]+)/));
  if (nameMatch) {
     name = nameMatch[1];
  }

  functionObj.name = name
  // return name
}

function getStoryName (fileContent: string, functionObj: any) {
  let storyName = ''
  const storyNameMatch = fileContent.match(
    new RegExp(`${functionObj.name || ''}\.storyName\\s*=\\s*['"](.*)['"]`)
  );
  if (storyNameMatch) {
    storyName = storyNameMatch[1];
  }

  functionObj.storyName = storyName
  // return storyName
}

function getFunctionHeaderComment(fileContent: string, functionObj: any) {
  const lines = fileContent.split('\n')
  let startLine = -1
  let endLine = -1

  for (let i = 0; i < lines.length; i++) {
    if (new RegExp(`^(export\\s+)?const\\s+${functionObj.name || ''}`).test(lines[i])) {
      endLine = i - 1
      break
    }
  }

  if (endLine === -1) return ''

  for (let i = endLine; i >= 0; i--) {
    if (lines[i].startsWith('/**')) {
      startLine = i + 1
      break
    }
  }

  if (startLine === -1) return ''

  for (let i = endLine; i < lines.length; i++) {
    if (lines[i].trim().endsWith('*/')) {
      endLine = i - 1
      break
    }
  }

  if (endLine === -1) return ''

  const commentLines = lines.slice(startLine, endLine + 1)
  const cleanedComment = commentLines
    .map((line) => line.replace(/^\s*\*\s?/, ''))
    .join('\n')

  functionObj.description = cleanedComment.trim()
  // return cleanedComment
}
