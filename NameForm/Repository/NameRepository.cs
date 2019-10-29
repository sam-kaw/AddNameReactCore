using System;
using System.IO;
using Microsoft.Extensions.Configuration;
using NameForm.Models;
using Newtonsoft.Json;

namespace NameForm.Repository
{
    public class NameRepository : INameRepository
    {
        private readonly IConfiguration _configuration = null;

        public NameRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // Function that inserts name in the file (JSON Format)
        public void InsertName(Name name)
        {
            //string filePath = _configuration["FilePaths:JsonFilePath"];
            
            string filePath = @"C:\name.txt";

            //open file stream
            try
            {
                using (StreamWriter file = File.AppendText(filePath))
                {
                    JsonSerializer serializer = new JsonSerializer();
                    //serialize object directly into file stream
                    serializer.Serialize(file, name);
                }
            }
            // Catching exception if file not accessible
            catch (UnauthorizedAccessException)
            {
                FileAttributes attr = (new FileInfo(filePath)).Attributes;
                Console.Write("UnAuthorizedAccessException: Unable to access file. ");
                if ((attr & FileAttributes.ReadOnly) > 0)
                    Console.Write("The file is read-only.");
            }
        }
    }
}
