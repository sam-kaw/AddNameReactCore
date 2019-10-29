using NameForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NameForm.Repository
{
    public interface INameRepository
    {
        // Function that inserts name in the file (JSON Format)
        void InsertName(Name name);
    }
}
